import { Component } from "@angular/core";

@Component({
    selector: 'features-section',
    template: `
        <section class="px-8 py-10">
            <ul class="flex justify-center gap-16">
            <li class="text-xl font-bold">Rápido</li>
            <li class="text-xl font-bold">Seguro</li>
            <li class="text-xl font-bold">Eficiente</li>
            </ul>
        </section>
    `,
    standalone: true,
})

export class FeaturesSection {}