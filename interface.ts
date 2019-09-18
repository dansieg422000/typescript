// Adding a ? will make the property optional
interface Team {
    team: string;
    member: number;
    project?: any;
    deadline?: string
}

function assignTeam(performanceTeam: Team) {
    console.log(`
        Team name: ${performanceTeam.team}
        Total members: ${performanceTeam.member}
        Project: ${performanceTeam.project}
    `);
}

let teamInfo = {team: 'Performance', member: 5, project: 'UI Revamp'};

assignTeam(teamInfo);

// Using interfaces to describe functions
interface jQuery {
    (selector: string): HTMLElement;
    version: number;
}

var $ = <jQuery>function(selector) {
    // Find DOM element
}

$.version = 1.12;

var element = $('#container')
element.click();