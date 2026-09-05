import * as migration_20260827_021255_initial from './20260827_021255_initial';

export const migrations = [
  {
    up: migration_20260827_021255_initial.up,
    down: migration_20260827_021255_initial.down,
    name: '20260827_021255_initial'
  },
];
