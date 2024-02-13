import {Component, inject} from '@angular/core';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { toSignal } from '@angular/core/rxjs-interop';
import {ShyftApiService} from './shyft-api-service';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'balance-section',
    imports: [DecimalPipe],
    template: `
        <section class="px-14 py-14 bg-white bg-opacity-5">
                @if(account()) {
                    <div class="flex items-center gap-2">
                        <img [src]="account()?.info?.image" class="w-8 h-8" />
                        <p class="text-2xl font-bold">
                            {{ account()?.balance | number }}
                        </p>
                    </div>
                }
        </section>
    `,
    standalone: true,
})

export class BalanceSection {

    private readonly _shyftApiService = inject(ShyftApiService);
    private readonly _walletStore = inject(WalletStore);
    private readonly _publicKey = toSignal(this._walletStore.publicKey$);
  
    readonly account = computedAsync(
        () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
        { requireSync: true},
    );

}