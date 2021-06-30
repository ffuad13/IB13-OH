let i = 1;

while (i <= 20) {
	console.log(i);
	i++;
}

/* Using Break */
for (let i = 1; i <= 10; i++) {
	if (i == 6) break;
	console.log(i);
}

/* Using Continue */
for (let i = 0; i <= 10; i++) {
	if (i < 6) continue;
	console.log(i);
}
