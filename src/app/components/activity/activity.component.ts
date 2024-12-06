import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { trigger, transition, animate, style } from '@angular/animations';
import { ActivityService } from '../Service/activity.service';
import { Activity } from '../model/Activity';
import { note } from '../emuns/Activity.enum';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ActivityComponent {
  noteFrom!: FormGroup;
  noteType!:number;
  noteActive = false;
  type = [
    'added a note to',
    'had a call to',
    'had a coffee with',
    'had a beer with',
    'had a metting with',
  ];
  data: Activity[] = [];
  isSubmitting: boolean = false;
  hoveredItemId: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {
    this.noteFrom = this.createnoteFromGroup();
    this.noteType = note.noteType
    this.loadActivities();
    console.log(this.data);
  }

  private loadActivities(): void {
    this.activityService.getActivities().subscribe((activities: Activity[]) => {
      this.data = activities;
    });
  }

  private createnoteFromGroup(): FormGroup {
    return this.formBuilder.group({
      note: [null],
    });
  }

  onSubmit(): void {
    if (this.isSubmitting) {
      return;
    }

    if (this.noteFrom.valid) {
      this.isSubmitting = true;

      const obj = {
        id: 1,
        note: this.noteFrom.value.note,
        noteType: this.noteType,
        user: 'You',
        createdAt: new Date().toISOString(),
        isdeleted: false,
      };

      this.activityService.addActivity(obj).subscribe({
        next: (response: Activity) => {
          console.log('Activity added successfully:', response);

          this.noteActive = false;
          this.noteType = 1;
          this.noteFrom.reset();

          this.isSubmitting = false;
        },
        error: (error: any) => {
          console.error('Failed to add activity:', error);
          this.isSubmitting = false;
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  selectNote(val: number) {
    this.noteType = val;
    console.log(this.noteType);
  }

  noteActiveToogle() {
    this.noteActive = true;
  }

  typeval(val: number) {
    var t = this.type[val];
    return t;
  }

  getDaysAgo(date: string): string {
    const today = new Date();
    const createdAt = new Date(date);
    const timeDiff = today.getTime() - createdAt.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (daysDiff === 0) {
      return '0d';
    } else if (daysDiff === 1) {
      return '1d';
    } else {
      return `${daysDiff}d`;
    }
  }

  deleterec(val: number) {
    this.data = this.data.filter((record) => record.id !== val);

    this.activityService.deleteActivity(val).subscribe({
      next: () => {
        console.log(`Record with ID ${val} deleted successfully.`);
      },
      error: (error:any) => {
        console.error('Failed to delete record:', error);
      },
    });
  }

  togglePanel(op: any, event: Event): void {
    event.stopPropagation(); // Prevent the event from propagating to other elements
    op.toggle(event);
  }
}
