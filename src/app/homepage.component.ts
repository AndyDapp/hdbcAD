import { Component } from "@angular/core";
import { BalanceSection } from "./balance-section";
import { FeaturesSection } from "./features-section";

@Component({
    selector: 'homepage',
    template: `
        <balance-section></balance-section>
        <features-section></features-section>
    `,
    imports: [BalanceSection, FeaturesSection],
    standalone: true,
})

export class HomePageComponent {}