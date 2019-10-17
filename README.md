# Getting started

1.  If you don't have one, [Create a GitHub Account](https://github.com/join)
    *You can use what ever email you want, but I'd recommend using your personal email*
2.  Fork this repository, but clicking for in the upper right hand corner
    ![fork screenshot](fork.png)
3.  Go to settings in your new repository and Cchange the name to match your username.
    ![Settings screenshot](settings.png)
    ![Name screenshot](rename.png)
4.  Visit your new website at http://[Insert you username].github.io if you load a
    website then it worked!


# Cloning repositroy

1.  First you'll need to clone your repository to your Desktop directory, to do this
    we'll use the command line.
2.  Open up an app on your computer called **Terminal**
3.  Type `cd Desktop` and press enter
4.  Type `git clone https://github.com/[Insert your username]/[Insert your username].github.io.git`
    and press enter
5.  Type `ls` and press enter and you should see a `[Insert your username].github.io` in the
    list of outputted text. Also you can test this by looking at your compuers desktop you
    should see a folder with the same name


# Saving changes to github

```bash
cd ~/Desktop/[Insert you username].github.io
git add .
git commit -m "Insert your message"
git push
```

*If your forget to add `-m "Insert your message"` you'll get put into a program called VIM. In order to leave VIM, type `:q` and press enter.*
