import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { S3UploadResponse } from '../interfaces/s3-upload-response';

@Injectable({
  providedIn: 'root'
})
export class FileManagementService {

  readonly API_ENDPOINT = 'file-management';

  constructor(private readonly httpClient: HttpClient) { }

  postImgS3(payload: FormData): Observable<S3UploadResponse> {
    return this.httpClient.post<S3UploadResponse>(`${environment.apiUrl}/${this.API_ENDPOINT}/post-img-s3`, payload);
  }
}
