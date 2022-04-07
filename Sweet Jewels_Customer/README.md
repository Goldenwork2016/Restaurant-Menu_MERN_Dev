### To install hugo 
[Instalation Doc](https://gohugo.io/getting-started/installing/)

You need to install go v1.14 and hugo v0.59.1. It won't run on the most recent versions. 

#### Mac & Homebrew installation
For go, homebrew has a formula:
```bash
brew insall go@1.14
```
then once it has downloaded you will probably need to link it
```bash
brew link go@1.14
```

For hugo, unfortunately you can't pick an older version in homebrew. So I would recommend downloading the tarball. 
To find release 0.59.1 go to [Hugo Releasees](https://github.com/gohugoio/hugo/releases?after=v0.60.0)
Download the hugo_extended file. You need the extended version for SCSS. 
A decent guide for the hugo tarball installation can be found [here](https://bwaycer.github.io/hugo_tutorial.hugo/tutorials/installing-on-mac/)

### To run 
```bash
hugo server -D
```

### To create a new page
```bash
hugo new <PAGE-NAME>
```

### To add translation phrase on Localizejs 
1. **Phrase** > **Manage Phrases** and filter to the page you would like to translate 
1. From the side bar select **Pending** to see all new phrases added to the page
1. Selected all phrases and approve 
1. Once all the phrases are in **Published**, feel free to edit the translations
All phrases will automatically update on the website
