import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable() // This wire up our classes into the Dependency Injection Container
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  fineOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}

/*
export class MessagesService {
  
    // DO THIS (DEPENDENCY INJECTION)
    This service (MessagesService) is creating it's own dependencies
    MessagesRepository is a dependency of this service (MessagesService)
  
    The service (MessagesService) depends on MessageRepository
    to exists in order to work properly

    constructor(public messagesRepo: MessagesRepository //DO THIS) {
      //this.messagesRepo = new MessagesRepository(); // DO NOT DO THIS, WRONG!
    }

    // And then you can use this.messagesRepo
    findAll() {
        return this.messagesRepo.findAll();
    }

  }
  */
