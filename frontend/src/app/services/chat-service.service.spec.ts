import { TestBed, inject } from '@angular/core/testing';

import { ChatServiceService } from './chat-service.service';

describe('ChatServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatServiceService]
    });
  });

  it('should be created', inject([ChatServiceService], (service: ChatServiceService) => {
    expect(service).toBeTruthy();
  }));
});
