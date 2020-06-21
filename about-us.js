import wixData from 'wix-data';

let infoData;

$w.onReady(function () {
  $w('#dynamicDataset').onReady( () => {
    let position = $w('#dynamicDataset').getCurrentItem().positionEn;
    let department = $w('#dynamicDataset').getCurrentItem().departmentEn;
    let subTitle = position + ' • ' + department;
    $w('#subTitle').text = subTitle;
    if (department === "Executive Management") {
      $w('#achieveTitleEN').show();
    }
  });

  infoData = {
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
      info: $w('#responsEN')
    }
  };
});

function skipInfo(num) {
  for (let i=1; i<4; i++) {
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
  skipInfo(1);
}

export function buttonSkills_click(event) {
  skipInfo(2);
}

export function Responsabilities_click(event) {
  skipInfo(3);
}