#!/usr/bin/fish

alias conf="code --file-uri ~/.config/conf.code-workspace" 

alias ls="eza --icons=auto --group-directories-first"

alias ll="ls -l --no-permissions --no-filesize --no-time --no-user --git"
alias la="ll --all"
alias laa="ls -lhamuU --total-size"

alias lt="ll -TR --level=2"
alias lta="la --tree --recurse --level=2"

alias vim="nvim"
alias vi="nvim"