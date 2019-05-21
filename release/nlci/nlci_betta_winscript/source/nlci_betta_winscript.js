if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_nlci_betta_winscript());
}
function Keyboard_nlci_betta_winscript()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this.KI="Keyboard_nlci_betta_winscript";
  this.KN="Betta WinScript [NLCI]";
  this.KMINVER="10.0";
  this.KV=null;
  this.KH='';
  this.KM=0;
  this.KBVER="2.0";
  this.KMBM=modCodes.SHIFT /* 0x0010 */;
  this.KS=1;
  this.s_vowelKeys="AiIuUeEYoOVH";
  this.s_vowels="ஆஇஈஉஊஎஏஐஒஓஔஃ";
  this.s_vowelMatras="ாிீுூெேைொோௌஃ";
  this.s_consKeys="kKgWcCjJwtTdNqQnpPbmyrlvzZshL";
  this.s_cons="கககஙசசஜஜஞடடடணததநபபபமயரலவஷஷஸஹள";
  this.s_consonants="கககஙசசஜஜஞடடடணததநபபபமயரலவஷஷஸஹளறழன";
  this.s_allKeys="kKgWcCjJwtTdNqQnpPbmyrlvzZshLAiIuUeEYoOVHaM";
  this.s_WordFinalPunct=" \",.>!]}-/;\\~@#$%^&*(_+|:<?)";
  this.s_numberKeys="1234567890";
  this.s_TamilNumbers="௧௨௩௪௫௬௭௮௯௦";
  this.KVER="10.0.1201.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSP /* 0x08 */)&&k.KFCM(1,t,['–'])) {   // Line 204
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"--");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSP /* 0x08 */)&&k.KFCM(1,t,['—'])) {   // Line 207
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"---");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t," ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"!");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"\"");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KFCM(1,t,['“'])) {   // Line 194
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"”");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KFCM(1,t,['”'])) {   // Line 195
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"\"");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {   // Line 193
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"“");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"#");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"$");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"%");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"&");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KFCM(1,t,['‘'])) {   // Line 198
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"’");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)&&k.KFCM(1,t,['’'])) {   // Line 199
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"'");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {   // Line 197
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"‘");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"(");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,")");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"*");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"+");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,",");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"-");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,".");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"/");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 218
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"௦");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)&&k.KFCM(1,t,[{t:'a',a:this.s_TamilNumbers}])) {   // Line 219
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_TamilNumbers,1,t);
      k.KO(-1,t,"௦");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 218
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"௧");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)&&k.KFCM(1,t,[{t:'a',a:this.s_TamilNumbers}])) {   // Line 219
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_TamilNumbers,1,t);
      k.KO(-1,t,"௧");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 218
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"௨");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)&&k.KFCM(1,t,[{t:'a',a:this.s_TamilNumbers}])) {   // Line 219
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_TamilNumbers,1,t);
      k.KO(-1,t,"௨");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 218
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"௩");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)&&k.KFCM(1,t,[{t:'a',a:this.s_TamilNumbers}])) {   // Line 219
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_TamilNumbers,1,t);
      k.KO(-1,t,"௩");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 218
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"௪");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)&&k.KFCM(1,t,[{t:'a',a:this.s_TamilNumbers}])) {   // Line 219
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_TamilNumbers,1,t);
      k.KO(-1,t,"௪");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 218
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"௫");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)&&k.KFCM(1,t,[{t:'a',a:this.s_TamilNumbers}])) {   // Line 219
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_TamilNumbers,1,t);
      k.KO(-1,t,"௫");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 218
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"௬");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)&&k.KFCM(1,t,[{t:'a',a:this.s_TamilNumbers}])) {   // Line 219
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_TamilNumbers,1,t);
      k.KO(-1,t,"௬");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 218
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"௭");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)&&k.KFCM(1,t,[{t:'a',a:this.s_TamilNumbers}])) {   // Line 219
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_TamilNumbers,1,t);
      k.KO(-1,t,"௭");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 218
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"௮");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)&&k.KFCM(1,t,[{t:'a',a:this.s_TamilNumbers}])) {   // Line 219
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_TamilNumbers,1,t);
      k.KO(-1,t,"௮");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 218
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"௯");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)&&k.KFCM(1,t,[{t:'a',a:this.s_TamilNumbers}])) {   // Line 219
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_TamilNumbers,1,t);
      k.KO(-1,t,"௯");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,":");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,";");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"<");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {   // Line 176
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"=");
      k.KDO(-1,t,3);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,">");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"?");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"@");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"A");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"A");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ா");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஆ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {   // Line 129
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ப𑌼");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"C");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"C");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ச");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {   // Line 110
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ட𑌼");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 100
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ேக𑌼");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 118
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ேட𑌼");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 137
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ேப𑌼");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 155
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ேத𑌼");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"E");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"E");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ே");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஏ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 75
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"F");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {   // Line 73
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {   // Line 92
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"க𑌼");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 105
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"க𑌼ஃ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 123
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ட𑌼ஃ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 142
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ப𑌼ஃ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 160
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"த𑌼ஃ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"H");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"H");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ஃ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஃ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 96
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"க𑌼ீ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 114
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ட𑌼ீ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 133
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ப𑌼ீ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 151
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"த𑌼ீ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"I");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"I");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ீ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஈ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"J");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"J");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஜ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"K");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"K");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"க");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"L");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(1,t,['ள'])) {   // Line 54
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ழ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(1,t,['\\'])) {   // Line 183
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ழ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"L");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ள");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"M");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"M");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {   // Line 85
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ம்");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"N");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"N");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ண");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 103
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ேக𑌼ா");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 121
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ேட𑌼ா");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 140
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ேப𑌼ா");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 158
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ேத𑌼ா");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"O");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"O");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ோ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஓ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"P");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"P");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ப");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Q");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"Q");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"த");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 89
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"R");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {   // Line 88
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 70
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"S");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {   // Line 69
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"T");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"T");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ட");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 98
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"க𑌼ூ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 116
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ட𑌼ூ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 135
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ப𑌼ூ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 153
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"த𑌼ூ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"U");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"U");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ூ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஊ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 104
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெக𑌼ௗ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 122
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெட𑌼ௗ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 141
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெப𑌼ௗ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 159
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெத𑌼ௗ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"V");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"V");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ௌ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஔ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"W");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"W");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ங");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(2,t,[{t:'a',a:this.s_consonants},'்'])) {   // Line 170
      r=m=1;
      k.KDC(2,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"்‌");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 169
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"்‌");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(1,t,['‌'])) {   // Line 171
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"‌");
      k.KB(t);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(1,t,['‍'])) {   // Line 188
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"‍");
      k.KB(t);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(1,t,['‌'])) {   // Line 189
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"‌");
      k.KB(t);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 101
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ைக𑌼");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 119
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ைட𑌼");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 138
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ைப𑌼");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 156
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ைத𑌼");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Y");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"Y");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ை");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஐ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"Z");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"Z");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஷ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {   // Line 147
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"த𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"\\");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {   // Line 181
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"\\");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"]");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"^");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"_");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&k.KFCM(3,t,['-','-','-'])) {   // Line 205
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"—");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&k.KFCM(2,t,['-','-'])) {   // Line 202
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"–");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&k.KFCM(1,t,['–'])) {   // Line 203
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"--");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&k.KFCM(1,t,['—'])) {   // Line 206
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"---");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {   // Line 211
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"`");
      k.KDO(-1,t,2);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['ா',{t:'d',d:1}])) {   // Line 38
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"அ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 93
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"க𑌼");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 94
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"க𑌼ா");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 111
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ட𑌼");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 112
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ட𑌼ா");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 130
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ப𑌼");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 131
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ப𑌼ா");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 148
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"த𑌼");
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 149
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"த𑌼ா");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"a");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,['அ'])) {   // Line 35
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ஆ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 36
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KDO(-1,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'d',d:0}])) {   // Line 37
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ா");
      k.KDO(-1,t,1);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"a");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {   // Line 34
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"அ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"b");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"b");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ப");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"c");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"c");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ச");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"d");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"d");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ட");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 99
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெக𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 117
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெட𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 136
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெப𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 154
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெத𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"e");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,['எ'])) {   // Line 41
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ஏ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,['ெ'])) {   // Line 42
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ே");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"e");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ெ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"எ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(4,t,[' ','ே','க','𑌼'])) {   // Line 107
      r=m=1;
      k.KDC(4,t);
      k.KO(-1,t,"ே𑌼க𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(4,t,[' ','ே','ட','𑌼'])) {   // Line 125
      r=m=1;
      k.KDC(4,t);
      k.KO(-1,t,"ே𑌼ட𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(4,t,[' ','ே','ப','𑌼'])) {   // Line 144
      r=m=1;
      k.KDC(4,t);
      k.KO(-1,t,"ே𑌼ப𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(4,t,[' ','ே','த','𑌼'])) {   // Line 162
      r=m=1;
      k.KDC(4,t);
      k.KO(-1,t,"ே𑌼த𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(3,t,['ெ','க','𑌼'])) {   // Line 106
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ெ𑌼க𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(3,t,['ெ','ட','𑌼'])) {   // Line 124
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ெ𑌼ட𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(3,t,['ெ','ப','𑌼'])) {   // Line 143
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ெ𑌼ப𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(3,t,['ெ','த','𑌼'])) {   // Line 161
      r=m=1;
      k.KDC(3,t);
      k.KO(-1,t,"ெ𑌼த𑌼");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 76
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"f");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(2,t,[{t:'a',a:this.s_consonants},'ெ'])) {   // Line 165
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெ𑌼");
      k.KIO(-1,this.s_consonants,1,t);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)&&k.KFCM(2,t,[{t:'a',a:this.s_consonants},'ே'])) {   // Line 166
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ே𑌼");
      k.KIO(-1,this.s_consonants,1,t);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {   // Line 74
      r=m=1;
      k.KDC(0,t);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"g");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"g");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"க");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"h");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"h");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஹ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 95
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"க𑌼ி");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 113
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ட𑌼ி");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 132
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ப𑌼ி");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 150
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"த𑌼ி");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"i");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,['இ'])) {   // Line 45
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ஈ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,['ி'])) {   // Line 46
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ீ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"i");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ி");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"இ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"j");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"j");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஜ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"k");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"k");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"க");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"l");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(1,t,['ல'])) {   // Line 49
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ள");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(1,t,['ள'])) {   // Line 50
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ழ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(1,t,['ழ'])) {   // Line 51
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ல");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"l");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ல");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"m");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"m");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ம");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"n");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,['ந'])) {   // Line 57
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ன");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,['ன'])) {   // Line 58
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ண");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,['ண'])) {   // Line 59
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ந");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,['\\'])) {   // Line 182
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ன");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"n");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ந");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 102
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெக𑌼ா");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 120
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெட𑌼ா");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 139
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெப𑌼ா");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 157
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ெத𑌼ா");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"o");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,['ஒ'])) {   // Line 62
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ஓ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,['ொ'])) {   // Line 63
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ோ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"o");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ொ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஒ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"p");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"p");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ப");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"q");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"q");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"த");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['=',{t:'d',d:3}])) {   // Line 177
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ர");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"r");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,['ர'])) {   // Line 66
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ற");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,['\\'])) {   // Line 184
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ற");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"r");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ர");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"s");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(1,t,['ஸ'])) {   // Line 82
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ஷ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"s");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஸ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"t");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"t");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ட");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['க','𑌼'])) {   // Line 97
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"க𑌼ு");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['ட','𑌼'])) {   // Line 115
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ட𑌼ு");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['ப','𑌼'])) {   // Line 134
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ப𑌼ு");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['த','𑌼'])) {   // Line 152
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"த𑌼ு");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"u");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,['உ'])) {   // Line 78
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ஊ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,['ு'])) {   // Line 79
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"ூ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"u");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 223
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"ு");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {   // Line 221
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"உ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"v");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"v");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"வ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"w");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"w");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஞ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(1,t,['‌'])) {   // Line 187
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"‌");
      k.KB(t);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(1,t,['‍'])) {   // Line 190
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"‍");
      k.KB(t);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(1,t,[{t:'a',a:this.s_consonants}])) {   // Line 226
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_consonants,1,t);
      k.KO(-1,t,"்");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(1,t,[{t:'a',a:this.s_vowels}])) {   // Line 227
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_vowels,1,t);
      k.KO(-1,t,"்");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(1,t,[{t:'a',a:this.s_vowels}])) {   // Line 230
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_vowels,1,t);
      k.KO(-1,t,"்");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(1,t,['அ'])) {   // Line 231
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"அ்");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)&&k.KFCM(1,t,[{t:'a',a:this.s_vowelMatras}])) {   // Line 232
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_vowelMatras,1,t);
      k.KO(-1,t,"்");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"y");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"y");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ய");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['=',{t:'d',d:3}])) {   // Line 178
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"ழ");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(2,t,['`',{t:'d',d:2}])) {   // Line 212
      r=m=1;
      k.KDC(2,t);
      k.KO(-1,t,"z");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)&&k.KFCM(1,t,[{t:'a',a:this.s_allKeys}])) {   // Line 213
      r=m=1;
      k.KDC(1,t);
      k.KIO(-1,this.s_allKeys,1,t);
      k.KO(-1,t,"z");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {   // Line 222
      r=m=1;
      k.KDC(0,t);
      k.KO(-1,t,"ஷ");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"|");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"}");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)&&k.KFCM(1,t,['‌'])) {   // Line 173
      r=m=1;
      k.KDC(1,t);
      k.KO(-1,t,"~");
    }
    return r;
  };
}
