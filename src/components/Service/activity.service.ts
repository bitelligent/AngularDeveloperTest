import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../model/Activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  note: Activity[] = [
    {
      id: 1,
      note: 'Met with the client',
      noteType: 1,
      user: 'Milton Romaguera',
      createdAt: '2024-12-01T14:23:00.000Z',
      isdeleted: false,
    },
    {
      id: 2,
      note: 'Met with the client',
      noteType: 2,
      user: 'Milton Romaguera',
      createdAt: '2024-12-01T14:23:00.000Z',
      isdeleted: false,
    },
    {
      id: 3,
      note: 'Met with the client',
      noteType: 3,
      user: 'Milton Romaguera',
      createdAt: '2024-12-05T14:23:00.000Z',
      isdeleted: false,
    },
    {
      id: 4,
      note: 'Met with the client',
      noteType: 4,
      user: 'Milton Romaguera',
      createdAt: '2024-12-03T14:23:00.000Z',
      isdeleted: false,
    },
    {
      id: 5,
      note: 'Met with the client',
      noteType: 5,
      user: 'Milton Romaguera',
      createdAt: '2024-12-05T14:23:00.000Z',
      isdeleted: false,
    },
  ];

  constructor(private http: HttpClient) {}

  getActivities(): Observable<Activity[]> {
    // return this.http.get<Activity[]>('assets/activities.json');
    return of(this.note);
  }

  addActivity(newActivity: Activity): Observable<Activity> {
    const newId = this.note.length
      ? Math.max(...this.note.map((item) => item.id)) + 1
      : 1;
    const activity = { ...newActivity, id: newId };

    this.note.push(activity);
    return of(activity);
  }

  deleteActivity(id: number): Observable<void> {
    const index = this.note.findIndex((activity) => activity.id === id);
  
    if (index !== -1) {
      this.note.splice(index, 1);
    }
  
    return of();
  }
}
