document.getElementById("gamelayout").style.display = "none";
document.getElementById("perm_shop").style.display = "none";

var attrshop = document.getElementById("attr_shop");
var permshop = document.getElementById("perm_shop");

document.getElementById("cycleshop").onclick = function() {
  if ($("#attr_shop").is(":visible")) {
    $("#attr_shop").hide();
    $("#perm_shop").show();
  } else {
    $("#attr_shop").show();
    $("#perm_shop").hide();
  }
  document.querySelector('table').style.height = "90%";
  document.querySelector('table').style.width = "100%";
}

function abbrNum(number, decPlaces) {
    decPlaces = Math.pow(10,decPlaces);
    var abbrev = [ "k", "m", "b", "t" ];
    for (var i=abbrev.length-1; i>=0; i--) {
        var size = Math.pow(10,(i+1)*3);
        if(size <= number) {
             number = Math.round(number*decPlaces/size)/decPlaces;
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }
             number += abbrev[i];
             break;
        }
    }

    return number;
}

var ffability = true;
var fuability = true;
var pdability = true;

var reset = false;

var money = 0;
var tokens = 0;

var injured = false;
var injurytype;

var played = false;

var ppg = 0;
var apg = 0;
var rpg = 0;
var spg = 0;
var bpg = 0;

var ppgvalue = 0;
var apgvalue = 0;
var rpgvalue = 0;
var spgvalue = 0;
var bpgvalue = 0;
var highlight = 100;

var prestige = 1;

var maxOvrReached = false;

var threeshooting = 60;
var midshooting = 60;
var layup = 60;
var dunk = 60;
var pass = 60;
var handle = 60;
var indefense = 60;
var exdefense = 60;
var block = 60;
var steal = 60;
var rebound = 60;
var jump = 60;
var speed = 60;
var stamina = 60;

var c_threeshooting = 20;
var c_midshooting = 20;
var c_layup = 20;
var c_dunk = 20;
var c_pass = 20;
var c_handle = 20;
var c_indefense = 20;
var c_exdefense = 20;
var c_block = 20;
var c_steal = 20;
var c_rebound = 20;
var c_jump = 20;
var c_speed = 20;
var c_stamina = 20;

var e_money;
var e_threeshooting;
var e_midshooting;
var e_layup;
var e_dunk;
var e_pass;
var e_handle;
var e_indefense;
var e_exdefense;
var e_block;
var e_steal;
var e_rebound;
var e_jump;
var e_speed;
var e_stamina;
var e_played;
var e_ffcooldown;
var e_pdcooldown;
var e_fucooldown;
var e_prestige;

function changeE(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eightteen, nineteen, twenty) {
  e_money = one;
  e_threeshooting = two;
  e_midshooting = three;
  e_layup = four;
  e_dunk = five;
  e_pass = six;
  e_handle = seven;
  e_indefense = eight;
  e_exdefense = nine;
  e_block = ten;
  e_steal = eleven;
  e_rebound = twelve;
  e_jump = thirteen;
  e_speed = fourteen;
  e_stamina = fifteen;
  e_played = sixteen;
  e_ffcooldown = seventeen;
  e_pdcooldown = eightteen;
  e_fucooldown = nineteen;
  e_prestige = twenty;
}

var overallyuh = threeshooting + midshooting + layup + dunk + pass + handle + indefense + exdefense + block + steal + rebound + jump + speed + stamina;
var overallyuh2 = 0;
var overall = overallyuh / 14;

if (played == false) {
  let player = prompt("Give your player a name.", "Enter name here")
  player = `Hello, ${player}`
  if (player != null) {
    document.getElementById("playername").innerHTML = player;
  }
}

var firstlayup = document.getElementById("firstlayup");
var firststeal = document.getElementById("firststeal");
var firstrebound = document.getElementById("firstrebound");
var firstpass = document.getElementById("firstpass");

firstlayup.onclick = function() {
  document.getElementById("choosefirst").style.display = "none";
  firstlayup.style.display = "none";
  firststeal.style.display = "none";
  firstrebound.style.display = "none";
  firstpass.style.display = "none";
  document.getElementById("gamelayout").style.display = "block";
  layup++;
}

firststeal.onclick = function() {
  document.getElementById("choosefirst").style.display = "none";
  firstlayup.style.display = "none";
  firststeal.style.display = "none";
  firstrebound.style.display = "none";
  firstpass.style.display = "none";
  document.getElementById("gamelayout").style.display = "block";
  steal++;
}

firstrebound.onclick = function() {
  document.getElementById("choosefirst").style.display = "none";
  firstlayup.style.display = "none";
  firststeal.style.display = "none";
  firstrebound.style.display = "none";
  firstpass.style.display = "none";
  document.getElementById("gamelayout").style.display = "block";
  rebound++;
}

firstpass.onclick = function() {
  document.getElementById("choosefirst").style.display = "none";
  firstlayup.style.display = "none";
  firststeal.style.display = "none";
  firstrebound.style.display = "none";
  firstpass.style.display = "none";
  document.getElementById("gamelayout").style.display = "block";
  pass++;
}

document.getElementById("prestigebutton").style.display = "none";

document.getElementById("upthreeshooting").onclick = function() {
  if (money < c_threeshooting) {
    return alert("Not enough upgrade points");
  } else if (threeshooting == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_threeshooting;
    threeshooting++;
    c_threeshooting = c_threeshooting * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("upmidshooting").onclick = function() {
  if (money < c_midshooting) {
    return alert("Not enough upgrade points");
  } else if (midshooting == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_midshooting;
    midshooting++;
    c_midshooting = c_midshooting * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("uplayup").onclick = function() {
  if (money < c_layup) {
    return alert("Not enough upgrade points");
  } else if (layup == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_layup;
    layup++;
    c_layup = c_layup * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("updunk").onclick = function() {
  if (money < c_dunk) {
    return alert("Not enough upgrade points");
  } else if (dunk == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_dunk;
    dunk++;
    c_dunk = c_dunk * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("uppass").onclick = function() {
  if (money < c_pass) {
    return alert("Not enough upgrade points");
  } else if (pass == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_pass;
    pass++;
    c_pass = c_pass * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("uphandle").onclick = function() {
  if (money < c_handle) {
    return alert("Not enough upgrade points");
  } else if (handle == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_handle;
    handle++;
    c_handle = c_handle * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("upindefense").onclick = function() {
  if (money < c_indefense) {
    return alert("Not enough upgrade points");
  } else if (indefense == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_indefense;
    indefense++;
    c_indefense = c_indefense * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("upexdefense").onclick = function() {
  if (money < c_exdefense) {
    return alert("Not enough upgrade points");
  } else if (exdefense == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_exdefense;
    exdefense++;
    c_exdefense = c_exdefense * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("upblock").onclick = function() {
  if (money < c_block) {
    return alert("Not enough upgrade points");
  } else if (block == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_block;
    block++;
    c_block = c_block * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("upsteal").onclick = function() {
  if (money < c_steal) {
    return alert("Not enough upgrade points");
  } else if (steal == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_steal;
    steal++;
    c_steal = c_steal * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("uprebound").onclick = function() {
  if (money < c_rebound) {
    return alert("Not enough upgrade points");
  } else if (rebound == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_rebound;
    rebound++;
    c_rebound = c_rebound * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("upjump").onclick = function() {
  if (money < c_jump) {
    return alert("Not enough upgrade points");
  } else if (jump == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_jump;
    jump++;
    c_jump = c_jump * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("upspeed").onclick = function() {
  if (money < c_speed) {
    return alert("Not enough upgrade points");
  } else if (speed == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_speed;
    speed++;
    c_speed = c_speed * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

document.getElementById("upstamina").onclick = function() {
  if (money < c_stamina) {
    return alert("Not enough upgrade points");
  } else if (stamina == 99) {
    return alert("This attribute is maxed out");
  } else {
    money = money - c_stamina;
    stamina++;
    c_stamina = c_stamina * 2;
  }
  if (c_multiplier == 0.2 && c_m_length > 0) {
    c_m_length = c_m_length - 1;
  } else if (c_multiplier == 0.2 && c_m_length == 0) {
    c_multiplier = 1;
  } else {
    return;
  }
}

var price_mult = 1;
var income_mult = 1;

var c_price_mult = 200;
var c_income_mult = 100;

document.getElementById("up_price_mult").onclick = function() {
  if (tokens < c_price_mult) {
    return alert('Not enough tokens');
  } else if (c_price_mult == 1200) {
    return alert('This upgrade is maxed out');
  } else {
    tokens = tokens - c_price_mult;
    price_mult = price_mult - 0.1;
    c_price_mult = c_price_mult + 200;
  }
}

document.getElementById("up_income_mult").onclick = function() {
  if (tokens < c_income_mult) {
    return alert('Not enough tokens');
  } else if (c_income_mult == 1100) {
    return alert('This upgrade is maxed out');
  } else {
    tokens = tokens - c_income_mult;
    income_mult = income_mult + 0.1;
    c_income_mult = c_income_mult + 100;
  }
}

var ffcooldown = 0;
var fucooldown = 0;
var pdcooldown = 0;

var yuhvalue = 0;

document.getElementById("ffability").onclick = function() {
  if (ffability == false) {
    return;
  } else if (ffcooldown != 0) {
    return;
  } else {
    ffcooldown = 60;
    yuhvalue = totalvalue * 15;
    money = money + yuhvalue;
    reload();
  }
}

document.getElementById("pdability").onclick = function() {
  if (pdability == false) {
    return;
  } else if (pdcooldown != 0) {
    return;
  } else {
    pdcooldown = 3600;
    c_multiplier = 0.2;
    reload();
  }
}

function randomupgrade() {
    var yuhman = Math.floor(Math.random() * 14);
    console.log(yuhman);
    if (yuhman == 0) {
      if (threeshooting != 99) {
        threeshooting++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 1) {
      if (midshooting != 99) {
        midshooting++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 2) {
      if (layup != 99) {
        layup++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 3) {
      if (dunk != 99) {
        dunk++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 4) {
      if (pass != 99) {
        pass++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 5) {
      if (handle != 99) {
        handle++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 6) {
      if (indefense != 99) {
        indefense++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 7) {
      if (exdefense != 99) {
        exdefense++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 8) {
      if (block != 99) {
        block++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 9) {
      if (steal != 99) {
        steal++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 10) {
      if (rebound != 99) {
        rebound++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 11) {
      if (jump != 99) {
        jump++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 12) {
      if (speed != 99) {
        speed++;
      } else {
        randomupgrade();
      }
    } else if (yuhman == 13) {
      if (stamina != 99) {
        stamina++;
      } else {
        randomupgrade();
      }
    } 
}

document.getElementById("fuability").onclick = function() {
  if (fuability == false) {
    return;
  } else if (fucooldown != 0) {
    return;
  } else {
    fucooldown = 14400;
    randomupgrade();
    reload();
  }
}

var inj_cooldown = 0;

function injury() {
  injured = true;
  var injurylevel = Math.floor(Math.random() * 20);
  if (injurylevel == 0) {
    injurytype = 5;
  } else if (injurylevel == 1) {
    injurytype = 4;
  } else if (injurylevel == 2) {
    injurytype = 4;
  } else if (injurylevel == 3) {
    injurytype = 3;
  } else if (injurylevel == 4) {
    injurytype = 3;
  } else if (injurylevel == 5) {
    injurytype = 3;
  } else if (injurylevel == 6) {
    injurytype = 2;
  } else if (injurylevel == 7) {
    injurytype = 2;
  } else if (injurylevel == 8) {
    injurytype = 2;
  } else if (injurylevel == 9) {
    injurytype = 2;
  } else if (injurylevel == 10) {
    injurytype = 1;
  } else if (injurylevel == 11) {
    injurytype = 1;
  } else if (injurylevel == 12) {
    injurytype = 1;
  } else if (injurylevel == 13) {
    injurytype = 1;
  } else if (injurylevel == 14) {
    injurytype = 1;
  } else if (injurylevel == 15) {
    injurytype = 1;
  } else if (injurylevel == 16) {
    injurytype = 1;
  } else if (injurylevel == 17) {
    injurytype = 1;
  } else if (injurylevel == 18) {
    injurytype = 1;
  } else if (injurylevel == 19) {
    injurytype = 1;
  }
  inj_cooldown = 30 * injurytype;
}

function hidep() {
  if (overall != 99) {
    document.getElementById('prestigebutton').style.display = "none"
  } else {
    return;
  }
}

document.getElementById("simgame").onclick = function() {
  var chance = Math.floor(Math.random() * 101);
  if (chance == 67 || chance == 68 || chance == 69 || chance == 70 || chance == 71) {
    injury();
    return alert(`You have been injured! The level of this injury is ${injurytype}, so your income will be cut in half for ${inj_cooldown} seconds`);
  } else if (injured == true) {
    return alert('You cannot play, you are injured');
  } else {
    var multiplier = Math.floor(Math.random() * 4);
    if (multiplier == 0) {
      var pstat = Math.round(ppgf.toFixed(1) * 0.25);
      var astat = Math.round(apgf.toFixed(1) * 0.25);
      var rstat = Math.round(rpgf.toFixed(1) * 0.25);
      var sstat = Math.round(spgf.toFixed(1) * 0.25);
      var bstat = Math.round(bpgf.toFixed(1) * 0.25);
      money = money + (totalvalue.toFixed(1) * 0.25);
      alert(`You had a bad game. Here were your stats: ${pstat} points, ${astat} assists, ${rstat} rebounds, ${sstat} steals, and ${bstat} blocks. You have earned no tokens for this game.`)
    } else if (multiplier == 1) {
      var pstat = Math.round(ppgf.toFixed(1) * 0.5);
      var astat = Math.round(apgf.toFixed(1) * 0.5);
      var rstat = Math.round(rpgf.toFixed(1) * 0.5);
      var sstat = Math.round(spgf.toFixed(1) * 0.5);
      var bstat = Math.round(bpgf.toFixed(1) * 0.5);
      money = money + (totalvalue.toFixed(1) * 0.5);
      tokens++;
      alert(`You had an okay game. Here were your stats: ${pstat} points, ${astat} assists, ${rstat} rebounds, ${sstat} steals, and ${bstat} blocks. You have earned 1 token for this game.`)
    } else if (multiplier == 2) {
      var pstat = Math.round(ppgf.toFixed(1) * 1);
      var astat = Math.round(apgf.toFixed(1) * 1);
      var rstat = Math.round(rpgf.toFixed(1) * 1);
      var sstat = Math.round(spgf.toFixed(1) * 1);
      var bstat = Math.round(bpgf.toFixed(1) * 1);
      money = money + (totalvalue.toFixed(1) * 1);
      tokens = tokens + 2;
      alert(`You had an average game. Here were your stats: ${pstat} points, ${astat} assists, ${rstat} rebounds, ${sstat} steals, and ${bstat} blocks. You have earned 2 tokens for this game.`)
    } else if (multiplier == 3) {
      var pstat = Math.round(ppgf.toFixed(1) * 2);
      var astat = Math.round(apgf.toFixed(1) * 2);
      var rstat = Math.round(rpgf.toFixed(1) * 2);
      var sstat = Math.round(spgf.toFixed(1) * 2);
      var bstat = Math.round(bpgf.toFixed(1) * 2);
      money = money + (totalvalue.toFixed(1) * 2);
      tokens = tokens + 4;
      alert(`You had a good game. Here were your stats: ${pstat} points, ${astat} assists, ${rstat} rebounds, ${sstat} steals, and ${bstat} blocks. You have earned 4 tokens for this game.`)
    }
  }
}

var p_autoupgrader = false;

var totalvalue = 0;

var vthreeshooting = 0;
var vmidshooting = 0;
var vlayup = 0;
var vdunk = 0;
var vpass = pass - 60;
var vhandle = handle - 60;
var vindefense = indefense - 60;
var vexdefense = exdefense - 60;
var vblock = block - 60;
var vsteal = steal - 60;
var vrebound = rebound - 60;
var vjump = jump - 60;
var vspeed = speed - 60;
var vstamina = stamina - 60;

var ppg2 = vthreeshooting * 0.5;
var ppg3 = vmidshooting * 0.3;
var ppg4 = vlayup * 0.3;
var ppg5 = vdunk * 0.4;
var ppgf = vthreeshooting + vmidshooting + vlayup + vdunk;

var apgf = vpass * 0.3;

var rpg2 = vrebound * 0.3;
var rpg3 = vjump * 0.2;
var rpgf = rpg3 + rpg2;

var spg2 = vsteal * 0.01;
var spg3 = vexdefense * 0.01;
var spgf = spg3 + spg2;

var bpg2 = vblock * 0.03;
var bpg3 = vindefense * 0.02;
var bpgf = bpg2 + bpg3;

var ffcd = document.getElementById("ffcooldown");
var pdcd = document.getElementById("pdcooldown");
var fucd = document.getElementById("fucooldown");
var injcd = document.getElementById("injcooldown");

var yvalue;
var yvalue2;
var yvalue3;
var yvalue4;
var yvalue5;

var totalvalue_mult = 1;

function abilityreload() {
  if (ffcooldown > 0) {
    ffcooldown = ffcooldown - 1;
    ffcd.innerText = `---00:00:${ffcooldown}---`
  }
  if (pdcooldown > 0) {
    pdcooldown = pdcooldown - 1;
    if (pdcooldown < 60) {
      pdcd.innerText = `---00:00:${pdcooldown}---`
    } else if (pdcooldown < 3600) {
      yvalue = pdcooldown % 60;
      yvalue2 = Math.floor(pdcooldown / 60);
      pdcd.innerText = `---00:${yvalue2}:${yvalue}---`
    } else if (pdcooldown < 7200) {
      yvalue3 = pdcooldown % 60;
      yvalue4 = Math.floor(pdcooldown / 60) - 60;
      pdcd.innerText = `---00:${yvalue4}:${yvalue3}---`
    }
  }
  if (fucooldown > 0) {
    fucooldown = fucooldown - 1;
    if (fucooldown < 60) {
      fucd.innerText = `---00:00:${fucooldown}---`
    } else if (fucooldown < 3600) {
      yvalue = fucooldown % 60;
      yvalue2 = Math.floor(fucooldown / 60);
      fucd.innerText = `---00:${yvalue2}:${yvalue}---`
    } else if (fucooldown < 86400) {
      yvalue3 = fucooldown % 60;
      yvalue4 = Math.floor(Math.floor(fucooldown / 60) / 4);
      yvalue5 = Math.floor(fucooldown / 3600);
      fucd.innerText = `---${yvalue5}:${yvalue4}:${yvalue3}---`
    }
  }
  if (inj_cooldown > 0) {
    inj_cooldown = inj_cooldown - 1;
    injcd.innerText = inj_cooldown;
    totalvalue_mult = 2;
  } else if (inj_cooldown < 0) {
    injured = false;
    inj_cooldown = 0;
    injcd.innerText = inj_cooldown;
    totalvalue_mult = 1;
  } else {
    injured = false;
    inj_cooldown = 0;
    injcd.innerText = inj_cooldown;
    totalvalue_mult = 1;
  }
}

console.log()

var c_multiplier = 1;
var c_m_length = 5;

var prestigePrompted = false;

function autoupgrader() {
  if (p_autoupgrader == false) {
    return;
  } else {
    var umvalue = Math.min(c_threeshooting, c_midshooting, c_layup, c_dunk, c_pass, c_handle, c_indefense, c_exdefense, c_block, c_steal, c_rebound, c_jump, c_speed, c_stamina);
    if (umvalue == c_threeshooting) {
      if (threeshooting != 99) {
        document.getElementById("upthreeshooting").click();
      }
    } else if (umvalue == c_midshooting) {
      if (midshooting != 99) {
        document.getElementById("upmidshooting").click();
      }
    } else if (umvalue == c_layup) {
      if (layup != 99) {
        document.getElementById("uplayup").click();
      }
    } else if (umvalue == c_dunk) {
      if (dunk != 99) {
        document.getElementById("updunk").click();
      }
    } else if (umvalue == c_pass) {
      if (pass != 99) {
        document.getElementById("uppass").click();
      }
    } else if (umvalue == c_handle) {
      if (handle != 99) {
        document.getElementById("uphandle").click();
      }
    } else if (umvalue == c_indefense) {
      if (indefense != 99) {
        document.getElementById("upindefense").click();
      }
    } else if (umvalue == c_exdefense) {
      if (exdefense != 99) {
        document.getElementById("upexdefense").click();
      }
    } else if (umvalue == c_block) {
      if (block != 99) {
        document.getElementById("upblock").click();
      }
    } else if (umvalue == c_steal) {
      if (steal != 99) {
        document.getElementById("upsteal").click();
      }
    } else if (umvalue == c_rebound) {
      if (rebound != 99) {
        document.getElementById("uprebound").click();
      }
    } else if (umvalue == c_jump) {
      if (jump != 99) {
        document.getElementById("upjump").click();
      }
    } else if (umvalue == c_speed) {
      if (speed != 99) {
        document.getElementById("upspeed").click();
      }
    } else if (umvalue == c_stamina) {
      if (stamina != 99) {
        document.getElementById("upstamina").click();
      }
    } 
  }
}

function prestige() {
  prestige++;
  money = 0;
  threeshooting = 60;
  midshooting = 60;
  layup = 60;
  dunk = 60;
  pass = 60;
  handle = 60;
  indefense = 60;
  exdefense = 60;
  block = 60;
  steal = 60;
  rebound = 60;
  jump = 60;
  speed = 60;
  stamina = 60;
  reload();
  document.getElementById("gamelayout").style.display = "none";
  firstlayup.style.display = "block";
  firststeal.style.display = "block";
  firstrebound.style.display = "block";
  firstpass.style.display = "block";
  document.getElementById("choosefirst").style.display = "block";
  p_autoupgrader = true;
}

document.getElementById("prestigebutton").onclick = function() {
  prestige++;
  money = 0;
  threeshooting = 60;
  midshooting = 60;
  layup = 60;
  dunk = 60;
  pass = 60;
  handle = 60;
  indefense = 60;
  exdefense = 60;
  block = 60;
  steal = 60;
  rebound = 60;
  jump = 60;
  speed = 60;
  stamina = 60;
  reload();
  document.getElementById("gamelayout").style.display = "none";
  firstlayup.style.display = "block";
  firststeal.style.display = "block";
  firstrebound.style.display = "block";
  firstpass.style.display = "block";
  document.getElementById("choosefirst").style.display = "block";
  p_autoupgrader = true;
}

var forty_yd = 0;
var other;

function reload() {
  vthreeshooting = threeshooting - 60;
  vmidshooting = midshooting - 60;
  vlayup = layup - 60;
  vdunk = dunk - 60;
  vpass = pass - 60;
  vhandle = handle - 60;
  vindefense = indefense - 60;
  vexdefense = exdefense - 60;
  vblock = block - 60;
  vsteal = steal - 60;
  vrebound = rebound - 60;
  vjump = jump - 60;
  vspeed = speed - 60;
  vstamina = stamina - 60;
  c_threeshooting = (((2 ** (vthreeshooting + 2)) / 2) * c_multiplier) * price_mult;
  c_midshooting = (((2 ** (vmidshooting + 2)) / 2) * c_multiplier) * price_mult;
  c_layup = (((2 ** (vlayup + 2)) / 2) * c_multiplier) * price_mult;
  c_dunk = (((2 ** (vdunk + 2)) / 2) * c_multiplier) * price_mult;
  c_pass = (((2 ** (vpass + 2)) / 2) * c_multiplier) * price_mult;
  c_handle = (((2 ** (vhandle + 2)) / 2) * c_multiplier) * price_mult;
  c_indefense = (((2 ** (vindefense + 2)) / 2) * c_multiplier) * price_mult;
  c_exdefense = (((2 ** (vexdefense + 2)) / 2) * c_multiplier) * price_mult;
  c_block = (((2 ** (vblock + 2)) / 2) * c_multiplier) * price_mult;
  c_steal = (((2 ** (vsteal + 2)) / 2) * c_multiplier) * price_mult;
  c_rebound = (((2 ** (vrebound + 2)) / 2) * c_multiplier) * price_mult;
  c_jump = (((2 ** (vjump + 2)) / 2) * c_multiplier) * price_mult;
  c_speed = (((2 ** (vspeed + 2)) / 2) * c_multiplier) * price_mult;
  c_stamina = (((2 ** (vstamina + 2)) / 2) * c_multiplier) * price_mult;
  money = Math.round(money);
  ppg2 = vthreeshooting * 0.3;
  ppg3 = vmidshooting * 0.1;
  ppg4 = vlayup * 0.1;
  ppg5 = vdunk * 0.4;
  ppgf = ppg2 + ppg3 + ppg4 + ppg5;
  apgf = vpass * 0.3;
  rpg2 = vrebound * 0.2;
  rpg3 = vjump * 0.1;
  rpgf = rpg3 + rpg2;
  spg2 = vsteal * 0.01;
  spg3 = vexdefense * 0.01;
  spgf = spg3 + spg2;
  bpg2 = vblock * 0.03;
  bpg3 = vindefense * 0.02;
  bpgf = bpg2 + bpg3;
  ppgvalue = ppgf * 15;
  apgvalue = apgf * 5;
  rpgvalue = rpgf * 7.5;
  spgvalue = spgf * 150;
  bpgvalue = bpgf * 50;
  totalvalue = ppgvalue + apgvalue + rpgvalue + spgvalue + bpgvalue;
  overallyuh = threeshooting + midshooting + layup + dunk + pass + handle + indefense + exdefense + block + steal + rebound + jump + speed + stamina;
  overallyuh2 = overallyuh / 14;
  overall = Math.round(overallyuh2);
  if (overall == 99) {
    maxOvrReached = true;
  }
  if (maxOvrReached == true && prestigePrompted == false) {
    prestigePrompted = true;
    if (confirm("You have reached the maximum overall! You can now prestige (doing this will reset all your progress, but it will unlock a new passive ability!) Would you like to prestige?")) {
      prestige();
    } else {
      document.getElementById("prestigebutton").style.display = "block";
    }
  }
  if (prestige > 1) {
    p_autoupgrader = true;
  }
  other = 850 / (stamina + speed);
  forty_yd = other.toFixed(2);
  document.getElementById("40yd").innerText = forty_yd;
  document.getElementById("overall1").innerText = overall;
  document.getElementById("money").innerText = Math.round(money);
  document.getElementById("threeshooting1").innerText = threeshooting;
  document.getElementById("midshooting1").innerText = midshooting;
  document.getElementById("layup1").innerText = layup;
  document.getElementById("dunk1").innerText = dunk;
  document.getElementById("pass1").innerText = pass;
  document.getElementById("handle1").innerText = handle;
  document.getElementById("indefense1").innerText = indefense;
  document.getElementById("exdefense1").innerText = exdefense;
  document.getElementById("block1").innerText = block;
  document.getElementById("steal1").innerText = steal;
  document.getElementById("rebound1").innerText = rebound;
  document.getElementById("jump1").innerText = jump;
  document.getElementById("speed1").innerText = speed;
  document.getElementById("stamina1").innerText = stamina;
  document.getElementById("c_threeshooting").innerText = c_threeshooting.toFixed(1);
  document.getElementById("c_midshooting").innerText = c_midshooting.toFixed(1);
  document.getElementById("c_layup").innerText = c_layup.toFixed(1);
  document.getElementById("c_dunk").innerText = c_dunk.toFixed(1);
  document.getElementById("c_pass").innerText = c_pass.toFixed(1);
  document.getElementById("c_handle").innerText = c_handle.toFixed(1);
  document.getElementById("c_indefense").innerText = c_indefense.toFixed(1);
  document.getElementById("c_exdefense").innerText = c_exdefense.toFixed(1);
  document.getElementById("c_block").innerText = c_block.toFixed(1);
  document.getElementById("c_steal").innerText = c_steal.toFixed(1);
  document.getElementById("c_rebound").innerText = c_rebound.toFixed(1);
  document.getElementById("c_jump").innerText = c_jump.toFixed(1);
  document.getElementById("c_speed").innerText = c_speed.toFixed(1);
  document.getElementById("c_stamina").innerText = c_stamina.toFixed(1);
  document.getElementById("ppg").innerText = ppgf.toFixed(1);
  document.getElementById("apg").innerText = apgf.toFixed(1);
  document.getElementById("rpg").innerText = rpgf.toFixed(1);
  document.getElementById("spg").innerText = spgf.toFixed(1);
  document.getElementById("bpg").innerText = bpgf.toFixed(1);
  document.getElementById("tokens").innerText = tokens;
  document.getElementById("price_mult").innerText = ((Math.round(price_mult * 10)) / 10).toFixed(1);
  document.getElementById("c_price_mult").innerText = ((Math.round(c_price_mult * 10)) / 10).toFixed(1);
  document.getElementById("income_mult").innerText = ((Math.round(income_mult * 10)) / 10).toFixed(1);
  document.getElementById("c_income_mult").innerText = ((Math.round(c_income_mult * 10)) / 10).toFixed(1);
}

function givepoints() {
  money = money + ((totalvalue / totalvalue_mult) * income_mult);
  document.getElementById("money").innerText = money;
  document.getElementById("totalvalue").innerText = totalvalue.toFixed(1) / totalvalue_mult;
}

function save() {
  if (reset == true) {
    return;
  }
  const lastVisit = Date.now();
  played = true;
  store.set('idle-nba-save', {
    "money": money,
    "threeshooting": threeshooting,
    "midshooting": midshooting,
    "layup": layup,
    "dunk": dunk,
    "pass": pass,
    "handle": handle,
    "indefense": indefense,
    "exdefense": exdefense,
    "block": block,
    "steal": steal,
    "rebound": rebound,
    "jump": jump,
    "speed": speed,
    "stamina": stamina,
    "totalincome": totalvalue,
    "played": played,
    "lastVisit": lastVisit,
    "ffcooldown": ffcooldown,
    "pdcooldown": pdcooldown,
    "fucooldown": fucooldown,
    "prestige": prestige,
    "tokens": tokens,
    "inj_cooldown": inj_cooldown,
    "injured": injured,
    "price_mult": price_mult,
    "c_price_mult": c_price_mult,
    "income_mult": income_mult,
    "c_income_mult": c_income_mult
  });
}

function load() {
  var sd = store.get('idle-nba-save');
  money = sd.money;
  threeshooting = sd.threeshooting;
  midshooting = sd.midshooting;
  layup = sd.layup;
  dunk = sd.dunk;
  pass = sd.pass;
  handle = sd.handle;
  indefense = sd.indefense;
  exdefense = sd.exdefense;
  block = sd.block;
  steal = sd.steal;
  rebound = sd.rebound;
  jump = sd.jump;
  speed = sd.speed;
  stamina = sd.stamina;
  played = sd.played;
  ffcooldown = sd.ffcooldown;
  pdcooldown = sd.pdcooldown;
  fucooldown = sd.fucooldown;
  prestige = sd.prestige;
  tokens = sd.tokens;
  inj_cooldown = sd.inj_cooldown;
  injured = sd.injured;
  price_mult = sd.price_mult;
  c_price_mult = sd.c_price_mult;
  income_mult = sd.income_mult;
  c_income_mult = sd.c_income_mult;
  if (prestige < 1) {
    p_autoupgrader = true;
  }
  if (played == true) {
    document.getElementById("choosefirst").style.display = "none";
    firstlayup.style.display = "none";
    firststeal.style.display = "none";
    firstrebound.style.display = "none";
    firstpass.style.display = "none";
    document.getElementById("gamelayout").style.display = "block";
  }
  reload();
  if (lastVisit == null) {
    return;
  }
  ppg2 = vthreeshooting * 0.3;
  ppg3 = vmidshooting * 0.1;
  ppg4 = vlayup * 0.1;
  ppg5 = vdunk * 0.4;
  ppgf = ppg2 + ppg3 + ppg4 + ppg5;
  apgf = vpass * 0.3;
  rpg2 = vrebound * 0.2;
  rpg3 = vjump * 0.1;
  rpgf = rpg3 + rpg2;
  spg2 = vsteal * 0.01;
  spg3 = vexdefense * 0.01;
  spgf = spg3 + spg2;
  bpg2 = vblock * 0.03;
  bpg3 = vindefense * 0.02;
  bpgf = bpg2 + bpg3;
  ppgvalue = ppgf * 15;
  apgvalue = apgf * 5;
  rpgvalue = rpgf * 7.5;
  spgvalue = spgf * 150;
  bpgvalue = bpgf * 50;
  totalvalue = ppgvalue + apgvalue + rpgvalue + spgvalue + bpgvalue;
  const now = Date.now();
  const secsSinceLastVisit1 = now - sd.lastVisit;
  secsSinceLastVisit1.toFixed();
  const secsSinceLastVisit2 = secsSinceLastVisit1 / 1000;
  secsSinceLastVisit2.toFixed();
  const secsSinceLastVisit3 = Math.round(secsSinceLastVisit2);
  const incomecollect = secsSinceLastVisit3 * totalvalue;
  const incomecollect2 = Math.round(incomecollect);
  money = money + incomecollect2;
  money = Math.round(money);
  ffcooldown = ffcooldown - secsSinceLastVisit3;
  pdcooldown = pdcooldown - secsSinceLastVisit3;
  fucooldown = fucooldown - secsSinceLastVisit3;
  if (ffcooldown < 0) {
    ffcooldown = 0;
  }
  if (pdcooldown < 0) {
    pdcooldown = 0;
  }
  if (fucooldown < 0) {
    fucooldown = 0;
  }
  reload();
}

document.getElementById("reset").onclick = function() {
  store.remove('idle-nba-save');
}

document.getElementById("reset2").onclick = function() {
  store.remove('idle-nba-save');
  reset = true;
}

if (overall > 90) {
  store.remove('idle-nba-save');
  reset = true;
  window.reload()
}

window.addEventListener('beforeunload', function () {
    save();
    window.location.replace("/index.html");
});

setInterval(reload, 100);
setInterval(givepoints, 1000);
setInterval(abilityreload, 1000);
setInterval(save, 15000);
setInterval(autoupgrader, 30000);
setInterval(hidep, 100)