/// <reference path='../../../../.config/sa.d.ts' />
import { WeaponType } from '../../../../.config/enums';
import { MenuChar } from '../../../models/index';

import { INFINITE_WEAPON_AMMO } from '../../../data/index';
import { SaCar } from './car';
//import { KeyCode } from '../../../../.config/enums';

export class SaChar extends MenuChar {
    constructor(private readonly char: Char) {
        super();
    }

    setHealth(health: number) {
        this.char.setHealth(health);

        return this;
    }

    addHealth(health: number) {
        this.setHealth(this.char.getHealth() + health);

        return this;
    }

    addArmor(armor: number) {
        this.char.addArmor(armor);

        return this;
    }

    addAmmo() {
        this.char.setAmmo(WeaponType.Pistol, INFINITE_WEAPON_AMMO)
            .setAmmo(WeaponType.Shotgun, INFINITE_WEAPON_AMMO)
            .setAmmo(WeaponType.Mp5, INFINITE_WEAPON_AMMO)
            .setAmmo(WeaponType.M4, INFINITE_WEAPON_AMMO)
            .setAmmo(WeaponType.Sniper, INFINITE_WEAPON_AMMO)
            .setAmmo(WeaponType.RocketLauncher, INFINITE_WEAPON_AMMO)
            .setAmmo(WeaponType.Satchel, INFINITE_WEAPON_AMMO)
            .setAmmo(WeaponType.SprayCan, INFINITE_WEAPON_AMMO);

        return this;
    }

    giveWeapon(id: number, ammo: number) {
        this.char.giveWeapon(id, ammo);

        return this;
    }

    getWeaponInSlot(id: number) {
        return this.char.getWeaponInSlot(id);
    }

    toggleFirstPersonCamera(enabled : boolean){
        if (enabled)
        {
            Camera.AttachToChar(this.char, 0.0,-0.1, 0.7, 0.0, 90.0, 0.0, 0.0, 2);
            // Camera.PersistTrack(true);
            //this.char.explodeHead();
        }
            //Camera.PointAtChar(this.char, 5, 2); 
        else
        {
            // Camera.PersistTrack(false);
            Camera.RestoreJumpcut();
        }
        return this;
    }

    setHeading(angle : float)
    {
        this.char.setHeading(angle);
    }

    getCurrentCar() {
        if (!this.char?.isSittingInAnyCar()) {
            return;
        }

        return new SaCar(this.char.getCarIsUsing());
    }

    setCoordinates(x: number, y: number, z: number) {
        this.char.setCoordinates(x, y, z);

        return this;
    }

    getPositionInFrontOfChar() {
        return this.getOffsetInWorldCoords(0, 4, 1);
    }

    getOffsetInWorldCoords(x: number, y: number, z: number) {
        return this.char.getOffsetInWorldCoords(x, y, z);
    }
}
