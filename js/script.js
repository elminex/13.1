const data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];

for (let i = 0; i < data.length; i++) {
    createBox(i)
};
function createBox(i) {
    const output = document.querySelector('.output');
    let box = document.createElement('div');
    let header = document.createElement('header');
    output.appendChild(box);
    box.appendChild(header);
    box.setAttribute('id', data[i].id);
    for (let j = 0; j < data[i].categories.length; j++) {
        let boxCategories = data[i].categories[j];
        console.log(boxCategories);
        box.classList.add(boxCategories);
    };
    header.innerHTML = data[i].title;
    box.insertAdjacentHTML('beforeend', data[i].content);
};