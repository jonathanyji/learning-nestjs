/*
    Repository is responsible to write or get data from the database/file storage
    and pass it to the service
*/

import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8'); //Get contents as a plain string
    const messages = JSON.parse(contents); // Parse plain string to a JSON object

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content: content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
