#!/usr/bin/env bash
#
# Based on dojo-boilerplate (https://github.com/csnover/dojo-boilerplate)
#
# Author : Elia Contini
# Created: 06 Nov 2019
#

set -e

# Base directory for this entire project
BASEDIR=$(cd $(dirname $0) && pwd)

# Source directory for unbuilt code
SRCDIR="$BASEDIR/src"

# Directory containing dojo build utilities
TOOLSDIR="$BASEDIR/node_modules/util/buildscripts"

# Destination directory for built code
DISTDIR="$BASEDIR/dist"

# Main application package build configuration
PROFILE="$BASEDIR/profiles/app.profile.js"

# Configuration over. Main application start up!

if [ ! -d "$TOOLSDIR" ]; then
	echo "Can't find Dojo build tools -- did you run npm install?"
	exit 1
fi

echo "Building application with $PROFILE to $DISTDIR."

echo -n "Cleaning old files..."
rm -rf "$DISTDIR"
echo " Done"

"$TOOLSDIR/build.sh" --profile "$PROFILE" --releaseDir "$DISTDIR" $@

# cleanup
cd "$DISTDIR"
find . -name "*.consoleStripped.js" -type f -delete

cd "$BASEDIR"

# copy and rename
cp "$SRCDIR/index-dist.html" "$DISTDIR/index.html"

# copy favicon and images
cp "$SRCDIR/favicon.ico" "$DISTDIR/favicon.ico"
cp -R "$SRCDIR/img" "$DISTDIR/img"

# build CSS
"$BASEDIR/node_modules/less/bin/lessc" -ru --source-map --clean-css="--s1 --advanced --compatibility=*" "$SRCDIR/css/style.less" "$DISTDIR/css/style.css"