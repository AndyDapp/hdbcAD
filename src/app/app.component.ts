import {Component, inject} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';
import {HdWalletMultiButtonComponent} from '@heavy-duty/wallet-adapter-material';
import {ShyftApiService} from './shyft-api-service';
import {MatAnchor} from '@angular/material/button';
import { DecimalPipe } from '@angular/common';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { toSignal } from '@angular/core/rxjs-interop';

/**
 * @title Basic buttons
 */
@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, DecimalPipe, MatAnchor, HdWalletMultiButtonComponent],
  selector: 'hdabsolute-root',
  template: `
        <header class="py-8 relative">
            <h1 class="text-5xl text-center mb-4">CryptoBank</h1>
            <br>

                <div class="flex justify-center">
                    <hd-wallet-multi-button></hd-wallet-multi-button>   
                </div>  
                <br>
                <nav>
                    <ul class="flex justify-center gap-4">
                        <li>
                            <a [routerLink]="['']" mat-raised-button>Balance</a>
                        </li>
                        <li>
                            <a [routerLink]="['settings']" mat-raised-button>Historial</a>
                        </li>
                    </ul>
                </nav>

        </header>
        
        <main>
            <router-outlet></router-outlet>
        </main>
       
        `,
})

export class AppComponent {
  title = 'CryptoBank';

}