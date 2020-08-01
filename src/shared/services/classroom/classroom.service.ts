import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor() { }

  uuid() {
    const buf = new Uint32Array(4);
    window.crypto.getRandomValues(buf);
    let idx = -1;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            idx++;
            var r = (buf[idx>>3] >> ((idx%8)*4))&15;
            var v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };

  saveClass$(className: string) {
    let uniqueId = this.uuid();
    return {
      roomId: uniqueId,
      roomTitle: className,
      slug: className.replace(/\s+/g, '-').toLowerCase()
    }
  }
}
