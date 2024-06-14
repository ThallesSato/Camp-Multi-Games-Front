import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RankingsComponent } from './components/pages/rankings/rankings.component';
import { JogosComponent } from './components/pages/jogos/jogos.component';
import { ResultadosComponent } from './components/pages/resultados/resultados.component';
import { TimesComponent } from './components/pages/times/times.component';
import { JogosFuturosComponent } from './components/pages/jogos-futuros/jogos-futuros.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ResultadoDetalheComponent } from './components/pages/resultado-detalhe/resultado-detalhe.component';
import { TimeDetalheComponent } from './components/pages/time-detalhe/time-detalhe.component';
import {NgOptimizedImage} from "@angular/common";
import { VoltarComponent } from './components/shared/voltar/voltar.component';
import { RankingFfaComponent } from './components/ranking-ffa/ranking-ffa.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingsComponent,
    JogosComponent,
    ResultadosComponent,
    TimesComponent,
    JogosFuturosComponent,
    RankingComponent,
    HeaderComponent,
    ResultadoDetalheComponent,
    TimeDetalheComponent,
    VoltarComponent,
    RankingFfaComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgOptimizedImage,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
