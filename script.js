let myData = [1, 2, 3, 4, 5];

let canvas = d3.select('#canvas');

canvas.append('svg')
  .style('width', 1000)
  .style('height', 1000)
  .style('background', 'purple')

let svg = canvas.selectAll('svg');

svg.selectAll('circle')
  .data(myData)
  .enter()
  .append('circle')
  .attr('cx', function(d) {
    return d * 25;
  })
  .attr('cy', function(d) {
    return d * 25;
  })
  .attr('r', 25)
  .attr('fill', function(d, i) {
    return (i % 2 === 0) ? 'green' : 'red';
  })

let rectButton = document.getElementById('rectButton');
let circleButton = document.getElementById('circleButton');

rectButton.addEventListener("click", createRects);
circleButton.addEventListener("click", createCircles);

function createCircles() {
  svg.selectAll("circle").remove();
  svg.selectAll("rect").remove();

  svg.selectAll('circle')
    .data(myData)
    .enter()
    .append('circle')
    .attr('cx', function(d) {
      return d * 25;
    })
    .attr('cy', function(d) {
      return d * 25;
    })
    .attr('r', 0.5)
    .attr('fill', 'orange')
}

function createRects() {
  svg.selectAll("circle").remove();

  svg.selectAll('rect')
    .data(myData)
    .enter()
    .append('rect')
    .attr('x', function(d) {
      return d * 25;
    })
    .attr('y', function(d) {
      return d * 25;
    })
    .attr('width', 3)
    .attr('height', 3)
    .attr('fill', 'red');
}