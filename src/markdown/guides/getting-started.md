[_title]:       #null   (Getting started)

# Getting started
## Install required software
This guide assumes you have an up to date node environment and npm
installed. To run the generated project, you need Vagrant & Ansible or Docker.

## Create your project
To create a hypress drive project, install [yeoman] and the 
[hypress generator].

```bash
npm install -g yeoman generator-hypress
```

Run the generator to create a customized project skelleton.
```bash
yo hypress
```

The generator will ask you for some information about your project 
and tries to make suggestions. You can change all those settings
later. 

## Bring up your environment
Navigate to the project folder and bring bring your vagrant box up.

```bash
vagrant up
```

This step may take several minutes, since most likely the base box
must be downloaded. Once you vagrant box is running, a provision 
playbook will be executed which will configure your machine
with your desired settings.

[yeoman]: http://google.com
[hypress generator]: components.md#generator-hypress