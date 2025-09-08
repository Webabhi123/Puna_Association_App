import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Need } from './need/need';
import { Keyinitiative } from './keyinitiative/keyinitiative';
import { Contactus } from './contactus/contactus';
import { Belief } from './belief/belief';
import { History } from './history/history';
import { Aimsobjective } from './aimsobjective/aimsobjective';
import { Facilitymember } from './facilitymember/facilitymember';
import { Alliancenational } from './alliancenational/alliancenational';
import { Allianceinternational } from './allianceinternational/allianceinternational';
import { Presidentsdesk } from './presidentsdesk/presidentsdesk';
import { Managingcommittee } from './managingcommittee/managingcommittee';
import { Pastpresident } from './pastpresident/pastpresident';
import { Memberlogin } from './memberlogin/memberlogin';
import { Becomemember } from './becomemember/becomemember';
import { Exhibitions } from './exhibitions/exhibitions';
import { Conferences } from './conferences/conferences';
import { Webinars } from './webinars/webinars';
import { Eventcalendars } from './eventcalendars/eventcalendars';
import { Awards } from './awards/awards';
import { Photos } from './photos/photos';
import { Videos } from './videos/videos';
import { Inspiringstories } from './inspiringstories/inspiringstories';
import { Blogs } from './blogs/blogs';
import { Transport } from './transport/transport';
import { Download } from './download/download';
import { ProductCategory } from './product-category/product-category';
import { SleevingTubing } from './sleeving-tubing/sleeving-tubing';
import { SurveillanceSystems } from './surveillance-systems/surveillance-systems';
import path from 'path';
import { HmiAccessories } from './hmi-accessories/hmi-accessories';
import { PlcAccessories } from './plc-accessories/plc-accessories';
import { DrivesMotors } from './drives-motors/drives-motors';
import { AutomationSystems } from './automation-systems/automation-systems';
import { InstrumentationControl } from './instrumentation-control/instrumentation-control';
import { DataLoggers } from './data-loggers/data-loggers';
import { ControlPanels } from './control-panels/control-panels';
import { AirConditioners } from './air-conditioners/air-conditioners';
import { AirCoolers } from './air-coolers/air-coolers';
import { Actuators } from './actuators/actuators';
import { Pumps } from './pumps/pumps';
import { Miscellaneous } from './miscellaneous/miscellaneous';
import { Tachometers } from './tachometers/tachometers';
import { CableAccessories } from './cable-accessories/cable-accessories';
import { Wires } from './wires/wires';
import { SolarCables } from './solar-cables/solar-cables';
import { InstrumentationCables } from './instrumentation-cables/instrumentation-cables';
import { SubcategorySwitchgear } from '../subcategory-switchgear/subcategory-switchgear';
import { SubcategoryWiresCables } from '../subcategory-wires-cables/subcategory-wires-cables';
import { SubcategoryAutomation } from '../subcategory-automation/subcategory-automation';
import { SubcategoryMotorsPumps } from '../subcategory-motors-pumps/subcategory-motors-pumps';
import { SubcategoryTestMeasuringInstruments } from '../subcategory-test-measuring-instruments/subcategory-test-measuring-instruments';
import { SubcategoryHousehold } from '../subcategory-household/subcategory-household';
import { SubcategoryHeaters } from '../subcategory-heaters/subcategory-heaters';
import { Sitemap } from './sitemap/sitemap';
import { RenderMode } from '@angular/ssr';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { RefundPolicy } from './refund-policy/refund-policy';
import { Disclaimer } from './disclaimer/disclaimer';
import { TermsCondition } from './terms-condition/terms-condition';
import { StepperMotor } from './stepper-motor/stepper-motor';
import { SoftStarters } from './soft-starters/soft-starters';
import { TransmitterDevice } from './transmitter-device/transmitter-device';
import { SwtichModePowerSupply } from './swtich-mode-power-supply/swtich-mode-power-supply';
import { ProximitySwitches } from './proximity-switches/proximity-switches';
import { HouseWire } from './house-wire/house-wire';
import { FlexibleCable } from './flexible-cable/flexible-cable';
import { ArmouredCable } from './armoured-cable/armoured-cable';
import { DistanceMeter } from './distance-meter/distance-meter';
import { MoistureMeter } from './moisture-meter/moisture-meter';
import { FuseLinksBaseHolders } from './fuse-links-base-holders/fuse-links-base-holders';
import { Mccb } from './mccb/mccb';
import { Mpcb } from './mpcb/mpcb';
import { MotorStarters } from './motor-starters/motor-starters';
import { Rcbo } from './rcbo/rcbo';
import { RotarySwitch } from './rotary-switch/rotary-switch';
import { SemiconductorFuses } from './semiconductor-fuses/semiconductor-fuses';
import { ChangeoverTransferSwitches } from './changeover-transfer-switches/changeover-transfer-switches';
import { LimitSwitches } from './limit-switches/limit-switches';
import { Acb } from './acb/acb';
import { Rccb } from './rccb/rccb';
import { IndustrialHeaters } from './industrial-heaters/industrial-heaters';
import { HeatingElements } from './heating-elements/heating-elements';
import { RoomHeaters } from './room-heaters/room-heaters';
import { ElectricWaterGeyser } from './electric-water-geyser/electric-water-geyser';
import { CentrifugalPumps } from './centrifugal-pumps/centrifugal-pumps';
import { DcMotor } from './dc-motor/dc-motor';
import { FuelPump } from './fuel-pump/fuel-pump';
import { GreasePumps } from './grease-pumps/grease-pumps';
import { HydraulicPumpsMotors } from './hydraulic-pumps-motors/hydraulic-pumps-motors';
import { OilPump } from './oil-pump/oil-pump';
import { PressurePumps } from './pressure-pumps/pressure-pumps';
import { PistonPumps } from './piston-pumps/piston-pumps';
import { SewageSubmersiblePumps } from './sewage-submersible-pumps/sewage-submersible-pumps';
import { ServoMotor } from './servo-motor/servo-motor';
import { ElectricAcMotors } from './electric-ac-motors/electric-ac-motors';
import { DiaphragmPumps } from './diaphragm-pumps/diaphragm-pumps';
import { DosingPumps } from './dosing-pumps/dosing-pumps';
import { BarrelPumps } from './barrel-pumps/barrel-pumps';
import { GearPump } from './gear-pump/gear-pump';
import { HighPressurePumps } from './high-pressure-pumps/high-pressure-pumps';
import { GearedMotor } from './geared-motor/geared-motor';
import { HorizontalPumps } from './horizontal-pumps/horizontal-pumps';
import { MonoblockPumps } from './monoblock-pumps/monoblock-pumps';
import { Impellers } from './impellers/impellers';
import { PmdcMotor } from './pmdc-motor/pmdc-motor';
import { RotaryPumps } from './rotary-pumps/rotary-pumps';
import { PneumaticPumps } from './pneumatic-pumps/pneumatic-pumps';
import { SubmersiblePumps } from './submersible-pumps/submersible-pumps';
import { SelfPrimingPumps } from './self-priming-pumps/self-priming-pumps';
import { ScrewPumps } from './screw-pumps/screw-pumps';
import { SynchronousMotor } from './synchronous-motor/synchronous-motor';
import { VanePump } from './vane-pump/vane-pump';
import { WaterPumps } from './water-pumps/water-pumps';
import { VaccumPumps } from './vaccum-pumps/vaccum-pumps';
import { VerticalPumps } from './vertical-pumps/vertical-pumps';
import { WellPump } from './well-pump/well-pump';
import { UpvcPipesFittings } from './upvc-pipes-fittings/upvc-pipes-fittings';
import { UniversalSocket } from './universal-socket/universal-socket';
import { PowerAdapter } from './power-adapter/power-adapter';
import { ModularSwitches } from './modular-switches/modular-switches';
import { Mcb } from './mcb/mcb';
import { SubcategoryTvSpeakers } from '../subcategory-tv-speakers/subcategory-tv-speakers';
import { SubcategorySolar } from '../subcategory-solar/subcategory-solar';
import { Tv } from './tv/tv';
import { TvPartsAccessories } from './tv-parts-accessories/tv-parts-accessories';
import { HomeTheaterSpeakerSystem } from './home-theater-speaker-system/home-theater-speaker-system';
import { SolarInverter } from './solar-inverter/solar-inverter';
import { SolarLedProducts } from './solar-led-products/solar-led-products';
import { SolarWaterHeater } from './solar-water-heater/solar-water-heater';
import { SubcategoryLightingFancyFittings } from '../subcategory-lighting-fancy-fittings/subcategory-lighting-fancy-fittings';
import { LedLightFittings } from './led-light-fittings/led-light-fittings';
import { TorchesEmergencyLight } from './torches-emergency-light/torches-emergency-light';
import { UvLampsTubes } from './uv-lamps-tubes/uv-lamps-tubes';
import { StreetLightPole } from './street-light-pole/street-light-pole';
import { SubcategoryRepairServices } from '../subcategory-repair-services/subcategory-repair-services';
import { PressureSwitches } from './pressure-switches/pressure-switches';
import { SubcategoryMiscellaneousElectricalItem } from '../subcategory-miscellaneous-electrical-item/subcategory-miscellaneous-electrical-item';
import { SubcategoryMetals } from '../subcategory-metals/subcategory-metals';
import { CoatedTreatedWires } from './coated-treated-wires/coated-treated-wires';
import { ApplicationSpecificWires } from './application-specific-wires/application-specific-wires';
import { BaseMaterialWires } from './base-material-wires/base-material-wires';
import { SubcategoryInverterUpsStabilizers } from '../subcategory-inverter-ups-stabilizers/subcategory-inverter-ups-stabilizers';
import { SubcategoryIndustrialBlowersFans } from '../subcategory-industrial-blowers-fans/subcategory-industrial-blowers-fans';
import { IndustrialAirCooler } from './industrial-air-cooler/industrial-air-cooler';
import { IndustrialFans } from './industrial-fans/industrial-fans';
import { Inverters } from './inverters/inverters';
import { Ups } from './ups/ups';
import { VoltageStabilizers } from './voltage-stabilizers/voltage-stabilizers';
import { AirVentilators } from './air-ventilators/air-ventilators';
import { VoltageRegulator } from './voltage-regulator/voltage-regulator';
import { IndustrialBlowers } from './industrial-blowers/industrial-blowers';
import { IndustrialExhaustFans } from './industrial-exhaust-fans/industrial-exhaust-fans';
import { SubcategoryHomeKitchenAppliances } from '../subcategory-home-kitchen-appliances/subcategory-home-kitchen-appliances';
import { CoffeeMakers } from './coffee-makers/coffee-makers';
import { FoodProcessor } from './food-processor/food-processor';
import { Oven } from './oven/oven';
import { VaccumCleaner } from './vaccum-cleaner/vaccum-cleaner';
import { AirPurifier } from './air-purifier/air-purifier';
import { AirFryer } from './air-fryer/air-fryer';
import { Blenders } from './blenders/blenders';
import { Cooker } from './cooker/cooker';
import { Dishwasher } from './dishwasher/dishwasher';
import { ElectricKettle } from './electric-kettle/electric-kettle';
import { Iron } from './iron/iron';
import { KitchenChimney } from './kitchen-chimney/kitchen-chimney';
import { Induction } from './induction/induction';
import { Juicer } from './juicer/juicer';
import { RotiMakers } from './roti-makers/roti-makers';
import { MixerGrinder } from './mixer-grinder/mixer-grinder';
import { SandwichMakers } from './sandwich-makers/sandwich-makers';
import { Toaster } from './toaster/toaster';
import { WashingMachine } from './washing-machine/washing-machine';
import { SubcategoryHTSwitchgear } from '../subcategory-h.t-switchgear/subcategory-h.t-switchgear';
import { RingMainUnit } from './ring-main-unit/ring-main-unit';
import { VaccumCircuitBreaker } from './vaccum-circuit-breaker/vaccum-circuit-breaker';
import { Sf6CircuitBreaker } from './sf6-circuit-breaker/sf6-circuit-breaker';
import { SubcategoryElectronics } from '../subcategory-electronics/subcategory-electronics';
import { SubcategoryGeneratorsAlternators } from '../subcategory-generators-alternators/subcategory-generators-alternators';
import { GasGenerators } from './gas-generators/gas-generators';
import { AlternatorParts } from './alternator-parts/alternator-parts';
import { PetrolGenerator } from './petrol-generator/petrol-generator';
import { DieselGenerator } from './diesel-generator/diesel-generator';
import { ExhaustFans } from './exhaust-fans/exhaust-fans';
import { BldcFans } from './bldc-fans/bldc-fans';
import { CeilingFans } from './ceiling-fans/ceiling-fans';
import { FanSparesParts } from './fan-spares-parts/fan-spares-parts';
import { PedestalFans } from './pedestal-fans/pedestal-fans';
import { RechargeableFan } from './rechargeable-fan/rechargeable-fan';
import { TableFan } from './table-fan/table-fan';
import { TowerFan } from './tower-fan/tower-fan';
import { WallFans } from './wall-fans/wall-fans';
import { SubcategoryDomesticFansAcCoolers } from '../subcategory-domestic-fans-ac-coolers/subcategory-domestic-fans-ac-coolers';
import { SubcategoryCctvSurveillanceSystems } from '../subcategory-cctv-surveillance-systems/subcategory-cctv-surveillance-systems';
import { CctvSwitchModePowerSupply } from './cctv-switch-mode-power-supply/cctv-switch-mode-power-supply';
import { Dvr } from './dvr/dvr';
import { FisheyeCamera } from './fisheye-camera/fisheye-camera';
import { IpCamera } from './ip-camera/ip-camera';
import { ThermalCamera } from './thermal-camera/thermal-camera';
import { CctvCameraDomeBullet } from './cctv-camera-dome-bullet/cctv-camera-dome-bullet';
import { CctvCameraCablesWires } from './cctv-camera-cables-wires/cctv-camera-cables-wires';
import { EpabxSystem } from './epabx-system/epabx-system';
import { CircularConnectors } from './circular-connectors/circular-connectors';
import {ResetPassword} from './reset-password/reset-password';
import { Thermocouplecables } from './thermocouplecables/thermocouplecables';
import { BusTransport } from './bus-transport/bus-transport';
import { RailwayTransport } from './railway-transport/railway-transport';
import { LogisticsTransport } from './logistics-transport/logistics-transport';
import { GiMsPipesFittings } from './gi-ms-pipes-fittings/gi-ms-pipes-fittings';
import { LedDrivers } from './led-drivers/led-drivers';
export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-module/admin-module.routes').then(m => m.adminroutes)
  },
  { path: '', component: Home },
  {path: 'about', component: About},
  {path:'need',component: Need},
  {path:'belief',component: Belief},
  {path: 'keyinitiative', component: Keyinitiative},
  {path:'history',component: History},
  {path:'aimsobjective',component: Aimsobjective},
  {path: 'facilitymember', component: Facilitymember},
  {path: 'alliancenational', component: Alliancenational},
  {path: 'allianceinternational', component: Allianceinternational},
  {path: 'contactus', component: Contactus},
  {path: 'presidentsdesk', component: Presidentsdesk},
  {path: 'managingcommittee', component: Managingcommittee},
  {path: 'pastpresident', component: Pastpresident},
  {path: 'memberlogin', component: Memberlogin},
  {path: 'becomemember', component: Becomemember},
  {path: 'exhibitions', component: Exhibitions},
  {path: 'conferences', component: Conferences},
  {path: 'webinars', component: Webinars},
  {path: 'eventcalendars', component: Eventcalendars},
  {path: 'awards', component: Awards},
  {path: 'photos', component: Photos},
  {path: 'videos', component: Videos},
  {path: 'inspiringstories', component: Inspiringstories},
  {path: 'blogs', component: Blogs},
  {path: 'transport', component: Transport},
  {path:'bus-transport',component:BusTransport},
  {path:'railway-transport',component:RailwayTransport},
  {path:'logistics-transport',component:LogisticsTransport},
  {path: 'download', component: Download},
  {path: 'product-category', component: ProductCategory},
  {path: 'sleeving-tubing', component: SleevingTubing},
  {path: 'surveillance-systems', component: SurveillanceSystems},
  {path:'hmi-accessories', component: HmiAccessories},
  {path:'plc-accessories', component: PlcAccessories},
  {path:'drives-motors', component: DrivesMotors},
  {path:'automation-systems', component: AutomationSystems},
  {path:'instrumentation-control', component: InstrumentationControl},
  {path:'data-loggers', component: DataLoggers},
  {path:'control-panels', component: ControlPanels},
  {path:'air-coolers', component: AirCoolers},
  {path:'air-conditioners', component: AirConditioners},
  {path:'actuators', component: Actuators},
  {path:'pumps', component: Pumps},
  {path:'miscellaneous',component:Miscellaneous},
  {path:'cable-accessories',component:CableAccessories},
  {path:'wires',component:Wires},
  {path:'solar-cables',component:SolarCables},
  {path:'instrumentation-cables',component:InstrumentationCables},
  {path:'sitemap',component:Sitemap},
  {path:'subcategory-wires-cables',component:SubcategoryWiresCables},
  {path:'subcategory-automation',component:SubcategoryAutomation},
  {path:'subcategory-motors-pumps',component:SubcategoryMotorsPumps},
  {path:'subcategory-test-measuring-instruments',component:SubcategoryTestMeasuringInstruments},
  {path:'subcategory-household',component:SubcategoryHousehold},
  {path:'subcategory-switchgear',component:SubcategorySwitchgear },
  {path:'subcategory-heaters',component:SubcategoryHeaters  },
  {path:'subcategory-tv-speakers',component:SubcategoryTvSpeakers},
  {path:'subcategory-solar',component:SubcategorySolar},
  {path:'subcategory-lighting-fancy-fittings',component:SubcategoryLightingFancyFittings},
  {path:'subcategory-repair-services',component:SubcategoryRepairServices},
  {path:'subcategory-miscellaneous-electrical-item',component:SubcategoryMiscellaneousElectricalItem},
  {path:'subcategory-metals',component:SubcategoryMetals},
  {path:'subcategory-inverter-ups-stabilizers',component:SubcategoryInverterUpsStabilizers},
  {path:'subcategory-industrial-blowers-fans',component:SubcategoryIndustrialBlowersFans},
  {path:'subcategory-home-kitchen-appliances',component:SubcategoryHomeKitchenAppliances},
  {path:'subcategory-h.t-switchgear',component:SubcategoryHTSwitchgear},
  {path:'subcategory-electronics',component:SubcategoryElectronics},
  {path:'subcategory-generators-alternators',component:SubcategoryGeneratorsAlternators}, 
  {path:'subcategory-domestic-fans-ac-coolers',component:SubcategoryDomesticFansAcCoolers},
  {path:'subcategory-cctv-surveillance-systems',component:SubcategoryCctvSurveillanceSystems},
  {path:'subcategory-electronics',component:SubcategoryElectronics},
  {path:'stepper-motor',component:StepperMotor},
  {path:'soft-starters',component:SoftStarters},
  {path:'transmitter-device',component:TransmitterDevice},
  {path:'switch-mode-power-supply',component:SwtichModePowerSupply},
  {path:'proximity-switches',component:ProximitySwitches},
  {path:'house-wire',component:HouseWire},
  {path:'flexible-cable',component:FlexibleCable},
  {path:'armoured-cable',component:ArmouredCable},
  {path:'distance-meter',component:DistanceMeter},
  {path:'moisture-meter',component:MoistureMeter},
  {path:'tachometers',component:Tachometers},
  {path:'acb',component:Acb},
  {path:'changeover-transfer-switches',component:ChangeoverTransferSwitches},
  {path:'fuse-links-base-holders',component:FuseLinksBaseHolders},
  {path:'limit-switches',component:LimitSwitches},
  {path:'mccb',component:Mccb},
  {path:'mpcb',component:Mpcb},
  {path:'motor-starters',component:MotorStarters},
  {path:'rcbo',component:Rcbo},
  {path:'rccb',component:Rccb},
  {path:'rotary-switch',component:RotarySwitch},
  {path:'semiconductor-fuses',component:SemiconductorFuses},
  {path:'electric-water-geyser',component:ElectricWaterGeyser},
  {path:'industrial-heaters',component:IndustrialHeaters},
  {path:'heating-elements',component:HeatingElements},
  {path:'room-heaters',component:RoomHeaters},   
  {path:'electric-ac-motors',component:ElectricAcMotors},
  {path:'barrel-pumps',component:BarrelPumps},
  {path:'centrifugal-pumps',component:CentrifugalPumps},
  {path:'diaphragm-pumps',component:DiaphragmPumps},
  {path:'dosing-pumps',component:DosingPumps},
  {path:'dc-motor',component:DcMotor},
  {path:'fuel-pump',component:FuelPump},
  {path:'grease-pumps',component:GreasePumps},
  {path:'gear-pump',component:GearPump},
  {path:'geared-motor',component:GearedMotor},
  {path:'hydraulic-pumps-motor',component:HydraulicPumpsMotors},
  {path:'high-pressure-pumps',component:HighPressurePumps},
  {path:'horizontal-pumps',component:HorizontalPumps},
  {path:'impellers',component:Impellers},
  {path:'monoblock-pumps',component:MonoblockPumps},
  {path:'oil-pump',component:OilPump},
  {path:'pressure-pumps',component:PressurePumps},
  {path:'pneumatic-pumps',component:PneumaticPumps},
  {path:'piston-pumps',component:PistonPumps},
  {path:'pmdc-Motor',component:PmdcMotor},
  {path:'rotary-pumps',component:RotaryPumps},
  {path:'sewage-submersible-pumps',component:SewageSubmersiblePumps},
  {path:'submersible-pumps',component:SubmersiblePumps},
  {path:'self-priming-pumps',component:SelfPrimingPumps},
  {path:'screw-pumps',component:ScrewPumps},
  {path:'synchronous-motors',component:SynchronousMotor},
  {path:'servo-motor',component:ServoMotor},
  {path:'vaccum-pumps',component:VaccumPumps},
  {path:'vertical-pump',component:VerticalPumps},
  {path:'vane-pump',component:VanePump},
  {path:'water-pumps',component:WaterPumps},
  {path:'well-pump',component:WellPump},
  {path:'upvc-pipes-fittings',component:UpvcPipesFittings},
  {path:'universal-socket',component:UniversalSocket},
  {path:'power-adapter',component:PowerAdapter},
  {path:'modular-switches',component:ModularSwitches},
  {path:'mcb',component:Mcb},
  {path:'tv',component:Tv},
  {path:'tv-parts-accessories',component:TvPartsAccessories},
  {path:'home-theater-speaker-system',component:HomeTheaterSpeakerSystem},
  {path:'solar-inverter',component:SolarInverter},
  {path:'solar-led-products',component:SolarLedProducts},
  {path:'solar-water-heater',component:SolarWaterHeater},
  {path:'led-light-fittings',component:LedLightFittings},
  {path:'torches-emergency-light',component:TorchesEmergencyLight},
  {path:'uv-lamps-tubes',component:UvLampsTubes},
  {path:'street-light-pole',component:StreetLightPole},
  {path:'pressure-switches',component:PressureSwitches},
  {path:'base-material-wires',component:BaseMaterialWires}, 
  {path:'coated-treated-wires',component:CoatedTreatedWires},
  {path:'application-specific-wires',component:ApplicationSpecificWires},
  {path:'inverters',component:Inverters},
  {path:'ups',component:Ups}, 
  {path:'voltage-stabilizers',component:VoltageStabilizers},
  {path:'voltage-regulator',component:VoltageRegulator},
  {path:'air-ventilators',component:AirVentilators},
  {path:'industrial-air-cooler',component:IndustrialAirCooler},
  {path:'industrial-fans',component:IndustrialFans},
  {path:'industrial-blowers',component:IndustrialBlowers},
  {path:'industrial-exhaust-fans',component:IndustrialExhaustFans},
  {path:'air-purifier',component:AirPurifier},
  {path:'air-fryer',component:AirFryer},
  {path:'Blenders',component:Blenders},
  {path:'Cooker',component:Cooker},
  {path:'coffee-makers',component:CoffeeMakers},
  {path:'Dishwasher',component:Dishwasher},
  {path:'electric-kettle',component:ElectricKettle},
  {path:'food-processor',component:FoodProcessor},
  {path:'induction',component:Induction},
  {path:'iron',component:Iron},
  {path:'juicer',component:Juicer},
  {path:'kitchen-chimney',component:KitchenChimney},
  {path:'mixer-grinder',component:MixerGrinder},
  {path:'oven',component:Oven},
  {path:'roti-makers',component:RotiMakers},
  {path:'sandwich-makers',component:SandwichMakers},
  {path:'toaster',component:Toaster},
  {path:'vaccum-cleaner',component:VaccumCleaner},
  {path:'washing-machine',component:WashingMachine},
  {path:'vaccum-circuit-breaker',component:VaccumCircuitBreaker},
  {path:'sf6-circuit-breaker',component:Sf6CircuitBreaker},
  {path:'ring-main-unit',component:RingMainUnit},
  {path:'diesel-generator',component:DieselGenerator},
  {path:'petrol-generator',component:PetrolGenerator},
  {path:'gas-generators',component:GasGenerators},
  {path:'alternator-parts',component:AlternatorParts},
  {path:'bldc-fans',component:BldcFans},
  {path:'ceiling-fans',component:CeilingFans},
  {path:'exhaust-fans',component:ExhaustFans},
  {path:'pedestal-fans',component:PedestalFans},
  {path:'rechargeable-fan',component:RechargeableFan},
  {path:'table-fan',component:TableFan},
  {path:'tower-fan',component:TowerFan},
  {path:'wall-fans',component:WallFans},
  {path:'fan-spares-parts',component:FanSparesParts},
  {path:'cctv-camera-cables-wires',component:CctvCameraCablesWires},
  {path:'cctv-switch-mode-power-supply',component:CctvSwitchModePowerSupply},
  {path:'cctv-camera-dome-bullet',component:CctvCameraDomeBullet},
  {path:'dvr',component:Dvr},
  {path:'fisheye-camera',component:FisheyeCamera},
  {path:'thermal-camera',component:ThermalCamera},
  {path:'ip-camera',component:IpCamera},
  {path:'surveillance-systems',component:SurveillanceSystems},
  {path:'circular-connectors',component:CircularConnectors},
  {path:'epabx-system',component:EpabxSystem}, 
  {path:'thermocouplecables',component:Thermocouplecables}, 
  {path:'blenders',component:Blenders},
  {path:'gi-ms-pipes-fittings',component:GiMsPipesFittings},   
  {path:'led-drivers',component:LedDrivers},
  {path:'vertical-pumps',component:VerticalPumps},
  
  {path:'reset-password/:id',component:ResetPassword,
    data:{
      renderMode: RenderMode.Server
    }
  },
  {path:'privacy-policy',component:PrivacyPolicy},
  {path:'refund-policy',component:RefundPolicy},
  {path:'disclaimer',component:Disclaimer},
  {path:'terms-condition',component:TermsCondition},
  // Add other routes here
];