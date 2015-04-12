(function() {

    var userGraph = function(){
        function link(scope, element, attributes){

            //Constants for the SVG
            var width = 500,
                height = 500;

            //Set up the colour scale
            var color = d3.scale.category20();

            //Set up the force layout
            var force = d3.layout.force()
                .charge(-120)
                .linkDistance(30)
                .size([width, height]);

            //Append a SVG to the body of the html page. Assign this SVG as an object to svg
            var svg = d3.select(element[0]).append("svg")
                .attr("width", width)
                .attr("height", height);

            //Create the graph data structure out of the data object on the scope, once it is assigned by the controller
            scope.$watch('data', function(graph) {
                //if (typeof graph !== "undefined") {
                    force.nodes(graph.nodes)
                        .links(graph.links)
                        .start();

                    //Create all the line svgs but without locations yet
                    var link = svg.selectAll(".link")
                        .data(graph.links)
                        .enter()
                        .append("line")
                        .attr("class", "link")
                        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

                    //Do the same with the circles for the nodes
                    var node = svg.selectAll(".node")
                        .data(graph.nodes)
                        .enter().append("circle")
                        .attr("class", "node")
                        .attr("r", 5)
                        .style("fill", function(d) { return color(d.group); })
                        .call(force.drag);

                    node.append("title")
                        .text(function(d) { return d.name; });


                    //Now we are giving the SVGs co-ordinates - the force layout is generating the co-ordinates which this code
                    // is using to update the attributes of the SVG elements
                    force.on("tick", function() {
                        link.attr("x1", function(d) { return d.source.x; })
                            .attr("y1", function(d) { return d.source.y; })
                            .attr("x2", function(d) { return d.target.x; })
                            .attr("y2", function(d) { return d.target.y; });

                        node.attr("cx", function(d) { return d.x; })
                            .attr("cy", function(d) { return d.y; });
                      });
                //}
            });



        }
        return {
            link: link,
            restrict: 'E',
            scope: {
                data: '=',
                v: '@'
            }
        };
    };






    /**
     *
     * Pass all functions into module
     */

    angular
        .module('myApp')
        .directive('userGraph', userGraph)

}());