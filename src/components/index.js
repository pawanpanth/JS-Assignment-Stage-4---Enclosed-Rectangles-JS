//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	//write your code
	if(contains(recA, recB)){
		const relativeDim = relative(recA, recB);
		return {...recA, children: [relativeDim]};

	}
	else if (contains(recB, recA)){
		const relativeDim = relative(recB, recA);
		return {...recB, children: [relativeDim]};
	}
	else{
		return{...recA};
	}
}
function contains(recA, recB){
	const recAn = normalize(recA);
	const recBn = normalize(recB);
	if(
		recAn.x1 <= recBn.x1 &&
		recAn.y1 <= recBn.y1 &&
		recAn.x2 >= recBn.x2 &&
		recAn.y2 >= recBn.y2
	){
		return true;
	}else{
		return false;
	}
}
function normalize(rec){
	return {
		x1: rec.top ? parseInt(rec.top):((parseInt(rec.bottom) + parseInt(rec.height))),

		y1: rec.left ? parseInt(rec.left):((parseInt(rec.right) + parseInt(rec.width))),
		x2: rec.bottom ?parseInt(rec.bottoom):(parseInt(rec.top) + parseInt(rec.height)),
		y2:rec.right ? (parseInt(rec.right)): (parseInt(rec.left) + parseInt(rec.width))
	}
}
function relative(recA, recB){
	const recAn = normalize(recA);
	const recBn = normalize(recB);
	const res = {
		children : recB.children
	}
	if(recB.top){
		res.top = `${recBn.x1 - recAn.x1}px`;
	}
	if(recB.left){
		rec.left = `${recBn.y1 - recAn.y1}px`;
	}
	if(recB.height){
		rec.height = recB.height;
	}
	if(rec.width){
		res.width = recB.width;
	}
	if(recB.bottom){
		res.bottom = `${recAn.x2 - recBn.x2}px`;
	}
	if(recB.right){
		res.right = `${recAn.y2 - recBn.y2}px`;
	}
	return res;
}

module.exports = updateStructure;
