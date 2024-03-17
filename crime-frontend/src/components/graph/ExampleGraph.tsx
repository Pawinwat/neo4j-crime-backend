import React, { useEffect } from 'react';
import { DataSet, Network, Edge } from 'vis-network/standalone/esm/vis-network';
import 'vis-network/styles/vis-network.css';
import { faker } from '@faker-js/faker'

const GraphComponent = () => {


    useEffect(() => {
        // Data for the graph
        // faker.color.rgb()
        let colors = [...Array(4)].map(r => faker.color.rgb())
        console.log(colors)

        let node = [...Array(10)].map((_, ind: number) => ({ id: ind, label: `Node ${ind + 1}`, color: colors[faker.number.int({ min: 0, max: 4 })] }))
        // faker.number.bigInt({min:1,max:5})
        console.log(node)
        const nodes = new DataSet(
            node
            //     [
            //   { id: 1, label: 'Node 1' },
            //   { id: 2, label: 'Node 2' },
            //   { id: 3, label: 'Node 3' },
            // ]
        );
        const edge: Edge[] = [...Array(5)].map((_, ind: number) => ({ from: faker.number.int({ min: 1, max: 5 }), to: faker.number.int({ min: 1, max: 5 }) }))
        const edges = new DataSet(edge);

        // Create a container for the graph
        const container = document.getElementById('network');

        // Define options for the graph
        const options = {
            nodes: {
                shape: 'circle',
            },
        };

        // Create a network instance
        if (!container) return
        const network = new Network(container, { nodes, edges }, options);
        // network.on("click", neighbourhoodHighlight);

        // Cleanup function to destroy the network on component unmount
        return () => {
            network.destroy();
        };
    }, []); // Run this effect only once when the component mounts

    return <div id="network" style={{ height: '400px' }}></div>;
};

export default GraphComponent;
