import { ApolloServerPluginLandingPageLocalDefaultOptions } from './../node_modules/apollo-server-core/src/plugin/landingPage/default/index';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core/dist/plugin';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
    }),
    ClientesModule,
  ],
  //providers: [AppService],
})
export class AppModule {}
