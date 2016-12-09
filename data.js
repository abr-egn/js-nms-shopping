PARTS = {
  'Component': LABEL_NOSPACE,
  'carite sheet':         {'iron': 50},
  'microdensity fabric':  {'iron': 50, 'platinum': 10},
  'suspension fluid':     {'carbon': 50},
  'electron vapor':       {'suspension fluid': 1, 'plutonium': 100},
  'antimatter':           {'electron vapor': 1, 'heridium': 50, 'zinc': 20},
  'dynamic resonator':    {'antimatter': 1, 'chrysonite': 100, 'microdensity fabric': 4},
  'voltaic cell':         {'antrium': 50},
  'copper wire':          {'rigogen': 20},
  'non-ferrous plate':    {'candensium': 50, 'antrium': 20},
  'circuit board':        {'non-ferrous plate': 1, 'copper wire': 1},
  'glass':                {'coryzagen': 30},
  'lubricant':            {'mordite': 40},
  'insulating gel':       {'spadonium': 40, 'temerium': 40},
  'poly-fibre':           {'fervidium': 100},
  'acid':                 {'temerium': 40},

  'Consumable': LABEL,
  'shielding shard':  {'iron': 25},
  'shielding plate':  {'iron': 50},
  'shielding sheet':  {'iron': 75},
  'power gel':        {'carbon': 25},
  'power canister':   {'carbon': 50},
  'power reservoir':  {'carbon': 75},
  'unstable plasma':  {'thamium9': 400, 'plutonium': 200},
  'warp cell':        {'thamium9': 100, 'antimatter': 1},
  'bypass chip':      {'iron': 10, 'plutonium': 10},

  'Base': LABEL,
  'Oxide': LABEL_NOSPACE,
  'iron':       {},
  'zinc':       {},
  'titanium':   {},
  'Silicate': LABEL_NOSPACE,
  'heridium':   {},
  'platinum':   {},
  'chrysonite': {},
  'Isotope': LABEL_NOSPACE,
  'carbon':     {},
  'thamium9':   {},
  'plutonium':  {},

  'Neutral': LABEL,
  'Mineral': LABEL_NOSPACE,
  'nickel':     {},
  'iridium':    {},
  'copper':     {},
  'gold':       {},
  'aluminium':  {},
  'emeril':     {},
  'Plant': LABEL_NOSPACE,
  'candensium': {},
  'fervidium':  {},
  'spadonium':  {},
  'temerium':   {},
  'coryzagen':  {},
  'Other': LABEL_NOSPACE,
  'tropheum':   {},
  'mordite':    {},
  'pugneum':    {},
  'coprite':    {},

  'Exotic': LABEL,
  'antrium':   {},
  'rigogen':   {},
  'rubeum':    {},
  'viridium':  {},
  'omegon':    {},
  'radnox':    {},
  'murrine':   {},
  'calium':    {},
  'cymatygen': {},

  'Alloy': LABEL,
  'aronium':  {'iron': 50, 'carbon': 50},
  'crolium':  {'iridium': 100, 'chrysonite': 80},
  'grantine': {'iridium': 150, 'copper': 50, 'aronium': 1},
  'herox':    {'platinum': 20, 'zinc': 20},
  'lemmium':  {'titanium': 100, 'plutonium': 200},
  'magmox':   {'carbon': 30, 'thamium9': 300, 'plutonium': 300},
  'terumin':  {'emeril': 40, 'gold': 40, 'herox': 1},

  'Trade': LABEL,
  'aquasphere':               {},
  'vy\'keen dagger':          {},
  'vy\'keen effigy':          {},
  'korvax convergence cube':  {},
  'korvax casing':            {},
  'gravitino ball':           {},
  'albumen pearl':            {},
  'dimensional matrix':       {},
  'grahgrah':                 {},
  'neutrino module':          {},
  'fascination bead':         {},
  'geknip':                   {},
  'gek relic':                {},
  'gek charm':                {},
  'vortex cube':              {},
  'sac venom':                {},
  'atlas stone':              {},

  'Exosuit': LABEL,
  'Upgrade': LABEL_NOSPACE,
  'atlaspass v1':               {'iron': 25, 'heridium': 10},
  'atlaspass v2':               {'zinc': 25, 'platinum': 10},
  'atlaspass v3':               {'titanium': 25, 'chrysonite': 10},
  'life support module sigma':  {'plutonium': 50, 'platinum': 20},
  'life support module tau':    {'plutonium': 50, 'platinum': 150},
  'stamina enhancement sigma':  {'iron': 20, 'carbon': 20},
  'stamina enhancement tau':    {'iron': 100, 'heridium': 150, 'plutonium': 50},
  'stamina enhancement theta':  {'zinc': 100, 'heridium': 150, 'plutonium': 50},
  'shieldboost sigma':          {'zinc': 15, 'platinum': 15, 'thamium9': 15},
  'shieldboost tau':            {'zinc': 100, 'platinum': 100, 'gold': 50},
  'shieldboost theta':          {'chrysonite': 300, 'microdensity fabric': 2},
  'jetpack booster sigma':      {'carite sheet': 1, 'platinum': 15, 'zinc': 10},
  'jetpack booster tau':        {'chrysonite': 150, 'titanium': 150, 'plutonium': 150},
  'jetpack booster theta':      {'omegon': 50, 'chrysonite': 300, 'plutonium': 300},
  'Protection': LABEL_NOSPACE,
  'radiation deflector sigma':  {'iron': 50, 'carbon': 100},
  'radiation deflector tau':    {'zinc': 50, 'carbon': 100, 'microdensity fabric': 1},
  'radiation deflector theta':  {'microdensity fabric': 2, 'electron vapor': 1, 'gravitino ball': 1},
  'coolant network sigma':      {'iron': 50, 'carbon': 100},
  'coolant network tau':        {'zinc': 50, 'carbon': 100, 'microdensity fabric': 1},
  'coolant network theta':      {'microdensity fabric': 2, 'electron vapor': 1, 'gravitino ball': 1},
  'thermic layer sigma':        {'iron': 50, 'carbon': 100},
  'thermic layer tau':          {'zinc': 50, 'carbon': 100, 'microdensity fabric': 1},
  'thermic layer theta':        {'microdensity fabric': 2, 'electron vapor': 1, 'gravitino ball': 1},
  'toxin suppressor sigma':     {'iron': 50, 'carbon': 100},
  'toxin suppressor tau':       {'zinc': 50, 'carbon': 100, 'microdensity fabric': 1},
  'toxin suppressor theta':     {'microdensity fabric': 2, 'electron vapor': 1, 'gravitino ball': 1},
  'aeration membrane sigma':    {'iron': 50, 'carbon': 100},
  'aeration membrane tau':      {'zinc': 50, 'carbon': 100, 'microdensity fabric': 1},
  'aeration membrane theta':    {'microdensity fabric': 2, 'electron vapor': 1, 'gravitino ball': 1},
  'Health': LABEL_NOSPACE,
  'health module sigma':        {'iron': 50, 'plutonium': 50, 'zinc': 10},
  'health module tau':          {'aluminium': 150, 'carbon': 250, 'thamium9': 50},
  'health module theta':        {'aluminium': 200, 'plutonium': 250, 'thamium9': 300},

  'Multitool': LABEL,
  'Grenade': LABEL_NOSPACE,
  'damage radius':              {'zinc': 100, 'iron': 50, 'chrysonite': 150},
  'damage radius tau':          {'plutonium': 200, 'emeril': 50},
  'grenade intensity sigma':    {'thamium9': 150, 'zinc': 20, 'heridium': 200},
  'grenade intensity tau':      {'iron': 200, 'aluminium': 200, 'nickel': 200},
  'grenade intensity theta':    {'neutrino module': 4, 'aluminium': 200, 'nickel': 200},
  'grenade propulsion':         {'zinc': 10, 'platinum': 20, 'chrysonite': 15},
  'grenade propulsion tau':     {'thamium9': 150, 'zinc': 20, 'chrysonite': 150},
  'homing grenade':             {'aluminium': 100, 'iron': 50, 'gold': 100},
  'rebound grenade':            {'zinc': 10, 'platinum': 20, 'chrysonite': 15},
  'rebound grenade tau':        {'heridium': 200, 'titanium': 200, 'chrysonite': 250},
  'Laser': LABEL_NOSPACE,
  'beam coolant system sigma':  {'iridium': 50, 'heridium': 20},
  'beam coolant system tau':    {'iridium': 200, 'heridium': 100},
  'beam coolant system theta':  {'aluminium': 200, 'heridium': 100},
  'beam intensifier sigma':     {'plutonium': 25, 'titanium': 30},
  'beam intensifier tau':       {'iron': 200, 'copper': 60},
  'beam intensifier theta':     {'iron': 100, 'iridium': 100, 'copper': 120},
  'beam focus sigma':           {'iron': 20, 'heridium': 20, 'plutonium': 25},
  'beam focus tau':             {'plutonium': 50, 'chrysonite': 100},
  'beam focus theta':           {'plutonium': 50, 'chrysonite': 200, 'platinum': 200},
  'combat amplifier sigma':     {'titanium': 30, 'carbon': 30},
  'combat amplifier tau':       {'titanium': 50, 'platinum': 100, 'chrysonite': 50},
  'combat amplifier theta':     {'heridium': 400, 'iron': 200, 'radnox': 20},
  'combat amplifier omega':     {'heridium': 400, 'iron': 200, 'gold': 100},
  'railshot adaptor':           {},  // TODO
  'Scanner': LABEL_NOSPACE,
  'scanner':                    {'carbon': 50},
  'rangeboost sigma':           {'thamium9': 30, 'platinum': 15, 'carbon': 30},
  'rangeboost tau':             {}, // TODO
  'Projectile': LABEL_NOSPACE,
  'boltcaster':                 {'iron': 25, 'plutonium': 25},
  'boltcaster clip sigma':      {'plutonium': 50, 'titanium': 20, 'microdensity fabric': 2},
  'boltcaster clip tau':        {'plutonium': 50, 'zinc': 20, 'nickel': 10},
  'boltcaster clip theta':      {'plutonium': 50, 'zinc': 50, 'nickel': 150},
  'boltcaster sm':              {'iridium': 50, 'iron': 50, 'platinum': 100},
  'homingbolt adaptor':         {'aquasphere': 5, 'titanium': 200, 'plutonium': 200},
  'impact damage sigma':        {'iridium': 50, 'iron': 50, 'platinum': 100},
  'impact damage tau':          {'iridium': 50, 'iron': 50, 'platinum': 100},  // TODO: verify
  'impact damage theta':        {'iridium': 200, 'radnox': 80, 'platinum': 200},
  'impact damage omega':        {'copper': 200, 'aluminium': 200, 'heridium': 400},
  'rapidfire sigma':            {'nickel': 50, 'iron': 200},
  'rapidfire tau':              {'titanium': 200, 'platinum': 100, 'aluminium': 100},
  'rapidfire theta':            {'aluminium': 100, 'platinum': 200},
  'recoil stabilizer sigma':    {'thamium9': 100, 'titanium': 50, 'chrysonite': 50},
  'recoil stabilizer tau':      {'thamium9': 200, 'titanium': 100, 'chrysonite': 150},
  'recoil stabilizer theta':    {'heridium': 250, 'zinc': 100, 'platinum': 150},
  'reload accelerant sigma':    {'iron': 20, 'heridium': 15, 'zinc': 10},
  'reload accelerant tau':      {'chrysonite': 50, 'zinc': 100, 'plutonium': 50},
  'ricochet sigma':             {'platinum': 100, 'iron': 200, 'heridium': 200},
  'ricochet tau':               {'platinum': 300, 'zinc': 150, 'microdensity fabric': 1},
  'ricochet theta':             {'gold': 100, 'plutonium': 100, 'platinum': 100},
  'shortburst adaptor':         {'copper': 60, 'heridium': 100, 'zinc': 20},
  'wideshot adaptor':           {'copper': 40, 'heridium': 100, 'iron': 50},

  'Starship': LABEL,
  'Drive': LABEL_NOSPACE,
  'pulse jet sigma':              {'chrysonite': 100, 'iron': 200, 'zinc': 50},
  'pulse jet tau':                {'nickel': 100, 'thamium9': 50, 'neutrino module': 2},
  'photonix core':                {'chrysonite': 100, 'iron': 200, 'zinc': 50},
  'warp reactor sigma':           {'dynamic resonator': 1, 'iridium': 200, 'copper': 400},
  'warp reactor tau':             {'dynamic resonator': 2, 'nickel': 600, 'aluminium': 800},
  'warp reactor theta':           {'dynamic resonator': 3, 'gold': 1000, 'emeril': 1000},
  'warp reactor omega':           {'dynamic resonator': 4, 'omegon': 1000, 'murrine': 1000, 'atlas stone': 10},
  'Shield': LABEL_NOSPACE,
  'deflection enhancement sigma': {'carite sheet': 6, 'heridium': 500},
  'deflection enhancement tau':   {'titanium': 200, 'heridium': 250, 'iron': 300},
  'deflection enhancement theta': {'zinc': 300, 'platinum': 80, 'emeril': 200},
  'Photon Cannon': LABEL_NOSPACE,
  'accelerated fire sigma':       {'iron': 50, 'aluminium': 100},
  'accelerated fire tau':         {'nickel': 100, 'platinum': 100},
  'accelerated fire theta':       {'thamium9': 300, 'iron': 300, 'dimensional matrix': 3},
  'advanced cooling sigma':       {'thamium9': 30, 'chrysonite': 30, 'iron': 50},
  'advanced cooling tau':         {'thamium9': 80, 'chrysonite': 70, 'iridium': 120},
  'advanced cooling theta':       {'thamium9': 200, 'chrysonite': 250, 'gravitino ball': 10},
  'cannon damage sigma':          {'iron': 50, 'thamium9': 50},
  'cannon damage tau':            {'iridium': 10, 'copper': 50, 'zinc': 50},
  'cannon damage theta':          {'omegon': 50, 'gold': 25, 'zinc': 25},
  'Phase Beam': LABEL_NOSPACE,
  'beam impact sigma':            {'thamium9': 50, 'chrysonite': 50},
  'beam impact tau':              {'thamium9': 200, 'copper': 50, 'carbon': 50},
  'beam impact theta':            {'omegon': 100, 'vortex cube': 3, 'carbon': 50},
  'phase coolant sigma':          {'microdensity fabric': 2, 'thamium9': 200, 'platinum': 25},
  'phase coolant tau':            {'heridium': 150, 'thamium9': 200, 'platinum': 50},
  'phase coolant theta':          {'dimensional matrix': 1, 'thamium9': 200, 'copper': 200},

  'Tech': LABEL,
  'beacon':                 {'voltaic cell': 1, 'carite sheet': 2},
  'save point':             {'platinum': 50, 'iron': 100},
  'signal booster':         {'iron': 50, 'platinum': 25},
  'landing pad':            {'voltaic cell': 2, 'non-ferrous plate': 10, 'lubricant': 1},
  'communications station': {'iron': 20},

  'Farming': LABEL,
  'hydroponic tray':    {'iron': 25, 'zinc': 5},
  'dicotyl':            {'thamium9': 40, 'carbon': 40, 'candensium': 100},  // produces candensium
  'puffball':           {'thamium9': 40, 'carbon': 20, 'temerium': 100},  // produces temerium
  'skywort':            {'thamium9': 40, 'carbon': 30, 'coryzagen': 100},  // produces coryzagen
  'cucrassula':         {'thamium9': 40, 'carbon': 30, 'spadonium': 100},  // produces spadonium
  'vivilava':           {'thamium9': 40, 'carbon': 15, 'fervidium': 100},  // produces fervidium
  'coprite orb':        {'thamium9': 40, 'carbon': 20, 'coprite': 60},  // produces coprite
  'carrion root':       {'thamium9': 40, 'carbon': 25, 'mordite': 30},  // produces mordite
  'bloodsbane':         {'thamium9': 100, 'antrium': 100},  // produces sac venom
  'gravitino orb':      {'thamium9': 100, 'antrium': 120},  // produces gravitino ball
  'albumen pearl orb':  {'thamium9': 100, 'rigogen': 20, 'albumen pearl': 3},  // produces albumen pearl

  'Construction': LABEL,
  'Structure': LABEL_NOSPACE,
  'foundation':                         {'iron': 100},
  'cylindrical room':                   {'iron': 100},
  'corridor':                           {'iron': 20},
  'glass roofed corridor':              {'iron': 30, 'glass': 1, 'heridium': 10},
  'Room Parts': LABEL_NOSPACE,
  'door':                               {'iron': 20},
  'access ramp':                        {'iron': 20},
  'ladder':                             {'iron': 50},
  'window':                             {'iron': 30, 'glass': 1},
  'Cuboid Rooms': LABEL_NOSPACE,
  'cuboid room':                        {'iron': 100},
  'window (large cuboid)':              {'heridium': 10, 'glass': 1},
  'cuboid room foundation strut quad':  {'iron': 20},
  'cuboid room foundation strut':       {'iron': 20},
  'cuboid room flooring':               {'iron': 30},
  'Infrastructure': LABEL_NOSPACE,
  'decoration (garage door)':           {'iron': 20},
  'infrastructure (platonic solid)':    {'carbon': 20},
  'paving':                             {'iron': 20},
  'Containers': LABEL_NOSPACE,
  'storage container':                  {'iron': 50, 'voltaic cell': 2},
  'Specialist Terminals': LABEL_NOSPACE,
  'terminal':                           {'iron': 50},
  'Lights': LABEL_NOSPACE,
  'light':                              {'heridium': 10, 'voltaic cell': 1},

  'Decorations': LABEL,
  'Decoration': LABEL_NOSPACE,
  'decoration (desk)': {'iron': 20},
  'decoration (gun rack)': {'iron': 20, 'zinc': 10},
  'decoration (plants)': {'iron': 20},
  'decoration (screen table)': {'iron': 20},
  'decoration (light ring)': {'heridium': 10, 'voltaic cell': 1},
  'decoration (screen arm)': {'iron': 20, 'zinc': 10},
  'decoration (bullseye)': {'iron': 20},
  'decoration (cabinet)': {'iron': 20},
  'decoration (fuel pod)': {'voltaic cell': 10, 'glass': 5, 'dynamic resonator': 2},
  'decoration (lockbox)': {'voltaic cell': 10, 'copper wire': 5, 'dynamic resonator': 1},
  'decoration (flag)': {'iron': 20, 'heridium': 10},
  'chair': {'iron': 30},
  'table': {'iron': 30},
  'tech panel': {'iron': 30, 'zinc': 10},
  'wall screen': {'iron': 30, 'zinc': 10},
  'wall fan': {'iron': 30, 'zinc': 10},
  'potted plant': {'iron': 30, 'zinc': 10},
  'wall unit': {'iron': 30},
  'bed': {'iron': 30},
  'Decals': LABEL_NOSPACE,
  'decal': {'iron': 10},
};

NOTES = {
  'iron': 'rocks, asteroids',
  'zinc': 'yellow flowers',
  'antrium': 'glowing cave plants',
};
