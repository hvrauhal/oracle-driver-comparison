#!/bin/sh
export OCI_HOME=[...]/instantclient_11_2 # Download the oracle drivers and point to them
export OCI_INCLUDE_DIR=$OCI_HOME/sdk/include
export OCI_INC_DIR=$OCI_INCLUDE_DIR
export OCI_LIB_DIR=$OCI_HOME
export DYLD_LIBRARY_PATH=$OCI_LIB_DIR
export NLS_LANG=.UTF8