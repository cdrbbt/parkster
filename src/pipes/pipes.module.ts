import { NgModule } from '@angular/core';
import { ThumbnailPipe } from './thumbnail/thumbnail';
import { MediaAdressPipe } from './media-adress/media-adress';
@NgModule({
	declarations: [ThumbnailPipe,
    MediaAdressPipe],
	imports: [],
	exports: [ThumbnailPipe,
    MediaAdressPipe]
})
export class PipesModule {}
