import { Injectable } from '@angular/core';
import { Incident } from './incident';

@Injectable({
  providedIn: 'root'
})
export class ExpressService {

  // housingLocationList: Incident[] = [{ _id: "65529cec586bc0977b8ba7f8", incident: "Spillage", "description": "Large oil spillage on the floor", "date": "2023-12-28T23:18:00.000Z" }, { _id: "655993c0b3b0c12a18813d69", incident: "Fire Alarm4", "description": "Fire alarm in Scarborough area", "date": "2022-11-19T20:07:00.000Z", "created": "2023-11-19T04:49:04.731Z", "updated": "2023-11-19T04:49:04.731Z", "__v": 0 }, { _id: "6559a5a7f88eb53afba2ff9b", incident: "Incident created by jaspreet", "description": "TESTING TESTING\"", "date": "2023-11-19T06:06:00.000Z", "__v": 0 }, { _id: "655a445360004abff8215e41", incident: "accident near stouffville hospital", "description": "an accident happens near stouffville hospital", "date": "2020-11-22T05:00:00.000Z", "created": "2023-11-19T17:22:27.519Z", "updated": "2023-11-19T17:22:27.519Z", "__v": 0 }, { _id: "6563af4e84bc54fd50d2e758", incident: "testing wsiu11", "description": "testing", "date": "2023-11-24T20:49:00.000Z", "__v": 0 }];
  url: string = "http://localhost:3500"

  constructor() { }

  async getAllIncident(): Promise<Incident[]> {
    const data = await fetch(this.url + "/data/all");
    return await data.json() ?? [];
  }
}
