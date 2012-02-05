with(b.style){margin=0;overflow='hidden'}

var
	//Set width and height to window size
	r = c.width = innerWidth,
	s = c.height = innerHeight,

	//We use the half of width and hide some times
	j = r/2,
	k = s/2,

	//The array containing the hearts. First heart is centered and red
	h = [[1, j, k, 'red']],

	//For computing sine. Will increment over time
	t = 0,

	P = Math.PI,
	S = Math.sin;

setInterval(function(i) {
	t += .005;

	//Remove the FIRST element if the SECOND is big enough
	//h[1]&&h[1][0]>j&&h.splice(0,1);
	h[1]&&h[1][0]>j&&h.shift();

	for(;h[i];i++)with(a) {
		b = h[i];
		b[0] *= 1.1;

		fillStyle = b[3];

		lineWidth = .2;
		strokeStyle = 'black';

		beginPath();
		arc(b[1] - b[0], c = b[2] - b[0], b[0], P*.8, P*2);
		arc(b[1] + b[0], c, b[0], P, P*2.2);
		lineTo(b[1], b[2] + b[0]*2);
		closePath();

		fill();
		stroke();
	}

	//Append a new element if the last element is big enough
	if(h[0]&&h[i-1][0] > 1.15) h.push([1, (c=S(t)/2)*j+j, c*k+k, 'rgb(' + ((Math.random()*55+200) | 0) + ',0,0)']);
}, 33, 0);