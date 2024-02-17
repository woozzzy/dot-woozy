#!/usr/bin/fish

alias conf="code --file-uri ~/.config/conf.code-workspace" 

alias ls="eza --icons=auto --group-directories-first"

alias ll="ls -l --no-permissions --no-filesize --no-time --no-user --git"
alias la="ll --all"
alias laa="ls -lhamuU --total-size"

alias lt="ll -TR --level=2"
alias lta="la --tree --recurse --level=2"

alias da="/home/woozy/_da"
alias db="/home/woozy/_db"
alias dl="/home/woozy/_dl"
alias wz="/home/woozy/_wz"

alias cda="cd /home/woozy/_da"
alias cdb="cd /home/woozy/_db"
alias cdl="cd /home/woozy/_dl"
alias cdw="cd /home/woozy/_wz"
