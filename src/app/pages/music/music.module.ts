import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';


@NgModule({
  declarations: [
    MusicComponent,
    PlaylistsComponent,
    PlaylistDetailsComponent,
    CreatePlaylistComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
