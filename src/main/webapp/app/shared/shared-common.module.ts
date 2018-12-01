import { NgModule } from '@angular/core';

import { AuthSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AuthSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AuthSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AuthSharedCommonModule {}
