import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  DashboardOutline,
  FormOutline,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  UserOutline,
  DeleteOutline,
  FileAddOutline,
  UnorderedListOutline,
  SaveOutline,
  CheckCircleTwoTone,
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  LockOutline,
  UserOutline,
  DeleteOutline,
  FileAddOutline,
  UnorderedListOutline,
  SaveOutline,
  CheckCircleTwoTone,
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
