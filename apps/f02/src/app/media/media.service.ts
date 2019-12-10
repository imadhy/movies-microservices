import { Injectable } from '@nestjs/common';

export type Media = any;
export type Playlist = any;

@Injectable()
export class MediaService {
  private readonly medias: Media[];
  private readonly playlist: Playlist[];

  //Static Medias
  constructor() {
    this.medias = [
      {
        id: '00c8ade3-b1e2-4362-86da-80d841fea5be',
        category_id: 1,
        title: 'Breaking Good',
        duration: 125,
        director: 1,
        producer: 1,
        release: Date(),
        synopsis: 'A chemistry teacher, Walter Black, try to make meth',
        createdAt: Date(),
        updatedAt: Date()
      },
      {
        id: '192533a2-f84d-44ac-9332-ab408552f66a',
        category_id: 2,
        title: 'Fiction Pulpeuse',
        duration: 136,
        director: 2,
        producer: 2,
        release: Date(),
        synopsis: 'PAN PAN PAN PAN',
        createdAt: Date(),
        updatedAt: Date()
      }
    ];
  }

  // Retrieve User By Id
  async getMediaById(id: string): Promise<Media | undefined> {
    return this.medias.find(media => media.id === id);
  }

  // Retrieve All Users
  async getAllMedias(): Promise<Media[] | undefined> {
    return this.medias;
  }

  // Retrieve Media Creation Date
  async getMediaCreationDate(id: string): Promise<Date | undefined> {
    return this.medias.find(media => media.id === id).createdAt;
  }

  // Retrieve All Users
  async getUpdateDate(id: string): Promise<Date | undefined> {
    return this.medias.find(media => media.id === id).updatedAt;
  }

  // Retrieve Media Type
  async getMediaLength(id: string): Promise<number | undefined> {
    return this.medias.find(media => media.id === id).length;
  }

  // Retrieve Media Category
  async getMediaCategory(id: string): Promise<string | undefined> {
    return this.medias.find(media => media.id === id).category;
  }

  // Add Media
  async addMedia(media: Media): Promise<Media | undefined> {
    this.medias.push(media);
    return media;
  }

  // Update Media By Id
  async updateMediaById(id: string, media: Media): Promise<Media | undefined> {
    let index = this.medias.indexOf(this.medias.find(media => media.id === id));
    this.medias[index] = media;
    return media;
  }

  // Delete Media By Id
  async deleteMediaById(id: string): Promise<string | undefined> {
    let index = this.medias.indexOf(this.medias.find(media => media.id === id));
    this.medias.splice(index, 1);
    return 'Media Deleted';
  }

  // Like Media
  async likeMedia(id: string): Promise<string | undefined> {
    // Like Media

    return 'Media Liked';
  }

  // Unlike Media
  async unlikeMedia(id: string): Promise<string | undefined> {
    // Unlike Media

    return 'Media Unliked';
  }

  // Unlike Media
  async commentMedia(id: string, comment: string): Promise<string | undefined> {
    // Comment Media

    return 'Media Commented';
  }
}
