import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class AppService {
  async getHello(hero1, hero2): Promise<string> {
    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt: `Respond with one of the choices only no matter waht. Between the two, who would win in a death match? ${hero1} OR ${hero2}?`,
    });

    return completion.data.choices[0].text;
  }
}
