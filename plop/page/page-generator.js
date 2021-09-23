module.exports = function (plop, handlers) {
    plop.setGenerator('page', {
        description: 'Page',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: "Page's Name: ",
            },
            {
                name: 'folder',
                type: 'input',
                message: "Folder's Name: ",
            },
        ],
        actions(data) {
            const actions = [
                {
                    type: 'add',
                    path: `src/pages/${data.folder.toLowerCase()}/${handlers.createFilename(
                        data.name
                    )}.tsx`,
                    templateFile: 'plop/page/page-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/styles/pages/${data.folder.toLowerCase()}/${handlers.createFilename(
                        data.name
                    )}.styled.tsx`,
                    templateFile: 'plop/page/page-style-template.hbs',
                },
            ];

            return actions;
        },
    });
};
