import wixData from 'wix-data';
import wixWindow from 'wix-window';

let infoDataEN;
let infoDataHE;

$w.onReady(function () {

  $w('#dynamicDataset').onReady( () => {
    let position;
    let department;
    let subTitle;
    let myLang = wixWindow.multilingual.currentLanguage;

    if (myLang === 'en') {
      $w('#teamStripHE').hide();
		  $w('#teamStripEN').show();
      position = $w('#dynamicDataset').getCurrentItem().positionEn;
      department = $w('#dynamicDataset').getCurrentItem().departmentEn;
      subTitle = position + ' • ' + department;
      $w('#subTitle').text = subTitle;
      if (department === "Executive Management") {
        $w('#achieveTitleEN').show();
      }
      else if ((position === 'Business Development')||(position === 'Accountant')) {
        $w('#responEN').hide();
        $w('#skillsEN').hide();
      }
      else if ((position === 'Client Relations')) {
        $w('#skillsEN').hide();
      }
    }

    else if (myLang === 'he') {
      $w('#teamStripEN').hide();
		  $w('#teamStripHE').show();
      position = $w('#dynamicDataset').getCurrentItem().position;
      department = $w('#dynamicDataset').getCurrentItem().department;
      subTitle = position + ' • ' + department;
      $w('#subTitleHE').text = subTitle;
      if (department === "הנהלה") {
        $w('#achieveTitleHE').show();
      }
      else if ((position === 'פיתוח עסקי')||(position === 'מנהלת חשבונות')) {
        $w('#navigationBarHE').hide();
      }
      else if (position === 'מנהלת משרד'){
        $w('#buttonResponsHE').hide();
        $w('#buttonSkillsHE').hide();
      }
      else if (position === 'קשרי לקוחות'){
        $w('#buttonSkillsHE').hide();
      }
    }
  });
// 1-3 EN , 4-6 HE
  infoDataEN = {
    1: {
      line: $w('#lineAbout'),
      info: $w('#bioAchieveEN')
    },
    2: {
      line: $w('#lineSkills'),
      info: $w('#topSkillsEN')
    },
    3: {
      line: $w('#lineRespons'),
      info: $w('#responsTextEN')
    }
  };

  infoDataHE = {
    1: {
      line: $w('#lineAboutHE'),
      info: $w('#bioAchieveHE')
    },
    2: {
      line: $w('#lineSkillsHE'),
      info: $w('#topSkillsHE')
    },
    3: {
      line: $w('#lineResponsHE'),
      info: $w('#responsTextHE')
    }
  };

});

function skipInfo(num, hideFrom) {
  for (let i=hideFrom; i<hideFrom+3; i++) {
    if (i !== num) {
      infoData[i]['line'].hide();
      infoData[i]['info'].hide();
    }
    else {
      infoData[i]['line'].show();
      infoData[i]['info'].show();
    }
  }
}

export function buttonAbout_click(event) {
  skipInfo(1, 1);
}

export function buttonSkills_click(event) {
  skipInfo(2, 1);
}

export function buttonRespons_click(event) {
  skipInfo(3, 1);
}

export function buttonAbouHE_click(event) { 
	skipInfo(4, 4);
}

export function buttonSkillsHE_click(event) {
	skipInfo(5, 4);
}

export function buttonResponsHE_click(event) { 
	skipInfo(6, 4);
}