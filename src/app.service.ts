import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { applicationConfig } from './config/application.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
  private DHPApp: admin.app.App;

  private DHPFirestore: admin.firestore.Firestore;
  constructor(
    @Inject(applicationConfig.KEY)
    private readonly appConfig: ConfigType<typeof applicationConfig>,
  ) {
    this.DHPApp = admin.initializeApp(
      {
        credential: admin.credential.cert({
          projectId: this.appConfig.dhp.projectId,
          clientEmail: this.appConfig.dhp.clientEmail,
          privateKey: this.appConfig.dhp.privateKey?.replace(/\\n/g, '\n'),
        }),
      },
      'DHPApp',
    );

    this.DHPFirestore = this.DHPApp.firestore();
  }

  private collectionName = 'app_config';

  private documentName = 'maintenance_mode';
  async getHello(): Promise<any> {
    try {
      const docRef = this.DHPFirestore.collection(this.collectionName).doc(
        this.documentName,
      );
      const doc = await docRef.get();
      if (doc.exists) {
        return doc.data();
      } else {
        throw new Error(
          `Document ${this.documentName} does not exist in collection ${this.collectionName}`,
        );
      }
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
