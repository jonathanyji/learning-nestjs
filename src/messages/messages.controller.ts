import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessages(@Body() request: CreateMessageDto) {
    return this.messagesService.create(request.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.fineOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
