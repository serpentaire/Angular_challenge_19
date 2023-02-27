import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './music.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';

const routes: Routes = [
  { path: '', component: MusicComponent },
  { path: 'Playlists', component: PlaylistsComponent },
  { path: 'PlaylistDetails', component: PlaylistDetailsComponent },
  { path: 'CreatePlaylist', component: CreatePlaylistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
