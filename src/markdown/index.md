[_template]:    #null   (default)
[_title]:       #null   (hypress.io)
[_description]: #null   (hypress is a modern WordPress development toolchain)
[__nosidebar]:   #null   (true)        

# A modern WordPress development toolchain
hypress is a modern WordPress development toolchain coming as an all in one bundle.

## Install hypress
To create a hypress project, we recommend to use the hypress generator. Install it by executing the
follwing command in your terminal.

```bash
npm install -g yeoman generator-hypress
```  

## Create a project
Create a directory in which you want to have your project skeleton. Navigate to this directory
and run the hypress generator.

```bash
mkdir my-first-hypress-project
cd my-first-hypress-project 
yo hypress
```  

The generator will ask you for various project details and tries to make meaningful suggestions. You can change any
of these settings later.

## Start your development environment
To spin up your development environment, you have the choice between two environments: Vagrant and Docker. Depending
on your choice, hypress requires some additional tools.  

### Vagrant
We recommend to use the Vagrant version. The docker implementation is experimental at the moment. 

To use the vagrant implementation, run

```bash
vagrant up
```  

Since most likely vagrant need to download the base box, this can take several minutes. 

### Docker
To use the docker integration, run

```bash
docker-compose up
``` 

### Please note
hypress installs and configures the whole environment for you. This includes configuring your development instance, 
installing WordPress and installing node modules. This can take several minutes when spinning up your project the first
time.

## Next steps
The generator has generated an individual README.md file. Please read carefully to use your hypress instance.