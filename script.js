document.addEventListener('DOMContentLoaded', () => {
    // 可以在这里添加交互功能
    console.log('个人主页加载完成！');

    // 示例：动态加载项目
    const projects = [
        { title: 'Hack Game', description: '一个有趣的黑客主题游戏。' , downloadLink: 'downloads/hack.zip'},
        { title: 'Snake Game', description: '我自己开发的贪吃蛇游戏。' , downloadLink: 'downloads/snake_by_myself.zip'},
        { title: 'Tic Tac Toe', description: '经典的井字棋游戏。' , downloadLink: 'downloads/tic_toc_toe.zip'}
    ];

    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project-item');
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.downloadLink}" download>下载</a>
            `;
            projectGrid.appendChild(projectElement);
        });
    }
});