fx_version 'cerulean'
game 'gta5'

author 'bblair321'
description 'Standalone MDT with FivePD and real player support'
version '1.0.0'

client_scripts {
    'client.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server.lua'
}

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js'
}