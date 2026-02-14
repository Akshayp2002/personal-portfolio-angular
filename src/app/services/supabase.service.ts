import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private s3Client: S3Client;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

    // Initialize S3 Client with provided credentials
    this.s3Client = new S3Client({
      region: environment.s3Config.region,
      endpoint: environment.s3Config.endpoint,
      credentials: {
        accessKeyId: environment.s3Config.accessKeyId,
        secretAccessKey: environment.s3Config.secretAccessKey
      },
      forcePathStyle: true // Needed for some S3 compatible storages
    });
  }

  // Submit a new review
  async submitReview(review: any) {
    const { data, error } = await this.supabase
      .from('reviews')
      .insert([review]); // Removed .select()

    if (error) throw error;
    return data;
  }

  // Upload Avatar using S3 Client
  async uploadAvatar(file: File) {
    const fileName = `${Date.now()}-${file.name}`;
    const bucketName = environment.s3Config.bucket;

    // Convert file to ArrayBuffer to fix "getReader is not a function" error
    const fileBuffer = await file.arrayBuffer();

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: new Uint8Array(fileBuffer),
      ContentType: file.type
      // ACL: 'public-read' // Supabase uses Policies, usually doesn't need ACL if bucket is Public
    });

    try {
      await this.s3Client.send(command);

      // Construct Public URL (Supabase pattern)
      // Assuming standard Supabase Storage Public URL structure
      const projectUrl = environment.supabaseUrl;
      const publicUrl = `${projectUrl}/storage/v1/object/public/${bucketName}/${fileName}`;

      return publicUrl;
    } catch (error) {
      console.error('S3 Upload Error:', error);
      throw error;
    }
  }



  // Fetch approved reviews
  async getReviews() {
    const { data, error } = await this.supabase
      .from('reviews')
      .select('*')
      .eq('is_approved', true) // Only show approved reviews
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }
}
