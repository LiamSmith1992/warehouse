const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs',
  lost: false,
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk',
  lost: false,
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147',
  lost: false,
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145',
  lost: false,
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  lost: false,
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz',
  lost: false,
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367',
  lost: false,
}]

function drawPackages(packageList) {
  let lineUpElem = document.getElementById('package-lineup')
  let template = ''
  packageList.forEach(package => {
    template += `
    <div class=" col-2 mx-2 cardy text-light text-center ">To: ${package.to}</div>`
  })
  lineUpElem.innerHTML = template
}

function priorityFree() {
  let free = packages.filter(package => package.priorityLevel == 'free')
  console.log('free', free);
  innerText = free
  drawPackages(free)
}
function priorityStandard() {
  let standard = packages.filter(package => package.priorityLevel == 'standard')
  console.log('standard', standard);
  drawPackages(standard);
}
function priorityExpress() {
  let express = packages.filter(package => package.priorityLevel == 'express')
  console.log('express', express);
  drawPackages(express)
}

function filterLightToHeavy() {
  let lightToHeavy = packages.sort((packageA, PackageB) => packageA.weight - PackageB.weight)
  console.log('light to heavy', lightToHeavy);
  drawPackages(lightToHeavy)
}



function filterFragile() {
  let fragile = packages.filter(package => package.isFragile == true)
  console.log('fragile', fragile);
  drawPackages(fragile)
}

function allPackages() {
  drawPackages(packages)
  console.log(packages)
}

function getLost() {
  let randomPackage = packages[Math.floor(Math.random() * packages.length)]
  randomPackage.lost = true
  console.log(randomPackage);
}

function getClue() {
  let lostPackage = packages.find(package => package.lost == true)
  let clues = ['priority-level', 'fragile', 'weight']
  let randomClue = clues[Math.floor(Math.random() * clues.length)]
  let clueElm = document.getElementById('clues')
  switch (randomClue) {
    case 'priority-level':
      console.log('priority was selected');
      clueElm.innerHTML += `<p>The package is priority level ${lostPackage.priorityLevel}</p>`
      break
    case 'fragile':
      console.log('fragile was selected');
      clueElm.innerHTML += `<p>Is the package fragile? ${lostPackage.isFragile}</p>`
      break
    case 'weight':
      console.log('weight was selected');
      clueElm.innerHTML += `<p>The packages weights ${lostPackage.weight}lbs</p>`
      break
  }
}

function findPackage() {
  let grabPackage = window.prompt('what package?')
  let lostPackage = packages.find(package => lostPackage == true)
  if (grabPackage == lostPackage.to) {
    window.alert('found it!')
  } else {
    getClue()
  }
}

getLost()
getClue()
allPackages()

